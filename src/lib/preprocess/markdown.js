/**
 * Markdown to Svelte preprocessor
 * Converts Markdown files to Svelte components with frontmatter, TOC, and code highlighting
 */

// @ts-nocheck
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { matter } from '../utils/matter.js'

// Patterns
const SVELTE_SYNTAX_REGEX = /(<[A-Za-z][^>]*>|{[#:/@][^}]*})/
const CODE_BLOCK_REGEX =
  /<pre([^>]*data-svelte-code="true"[^>]*?)>([\s\S]*?)<\/pre>/g
const DATA_ATTR_REGEX = /\s*data-svelte-code="true"\s*/

// Escape Svelte syntax characters in HTML
function escapeSvelte(str) {
  return str.replace(/[{}`]/g, (match) =>
    match === '{'
      ? '&#123;'
      : match === '}'
        ? '&#125;'
        : match === '`'
          ? '&#96;'
          : match
  )
}

// Remark plugin to handle Svelte components in paragraphs
function remarkCleanSvelte() {
  return (tree) => {
    visit(tree, 'paragraph', (node) => {
      const firstChild = node.children?.[0]
      if (!firstChild || !['text', 'html'].includes(firstChild.type)) return

      if (SVELTE_SYNTAX_REGEX.test(firstChild.value)) {
        node.type = 'html'
        node.value = node.children.map((child) => child.value || '').join('')
      }
    })
  }
}

// Rehype plugin to mark code blocks
function rehypeMarkCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre') {
        node.properties = node.properties || {}
        node.properties['data-svelte-code'] = 'true'
      }
    })
  }
}

// Rehype plugin to extract headings for TOC
function rehypeExtractTOC() {
  return (tree, file) => {
    const toc = []

    visit(tree, 'element', (node) => {
      if (!/^h[1-6]$/.test(node.tagName)) return

      const level = parseInt(node.tagName.substring(1))
      let text = ''

      visit(node, null, (child) => {
        if (child.type === 'text' || child.value) {
          text += child.value || ''
        }
      })

      const trimmedText = text.trim()
      if (!trimmedText) return

      const id = trimmedText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

      node.properties = node.properties || {}
      node.properties.id = id

      toc.push({ level, text: trimmedText, id })
    })

    file.data.toc = toc
  }
}

export function mdPreprocess(options = {}) {
  const remarkPlugins = options.remarkPlugins || []
  const rehypePlugins = options.rehypePlugins || []

  return {
    name: 'md-preprocess',
    markup: async ({ content, filename }) => {
      if (!filename?.endsWith('.md')) return { code: content }

      try {
        // Parse frontmatter
        const { frontmatter, content: mdContent } = matter(content)

        // Process markdown
        const processor = unified().use(remarkParse).use(remarkCleanSvelte)

        // Add custom remark plugins
        for (const plugin of remarkPlugins) {
          processor.use(
            Array.isArray(plugin) ? plugin[0] : plugin,
            Array.isArray(plugin) ? plugin[1] : undefined
          )
        }

        processor
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeExtractTOC)

        // Add custom rehype plugins
        for (const plugin of rehypePlugins) {
          processor.use(
            Array.isArray(plugin) ? plugin[0] : plugin,
            Array.isArray(plugin) ? plugin[1] : undefined
          )
        }

        processor
          .use(rehypeMarkCodeBlocks)
          .use(rehypeStringify, { allowDangerousHtml: true })

        // Run the processor
        const result = await processor.process({
          value: mdContent,
          data: { matter: frontmatter || {} }
        })

        let html = String(result)
        const toc = result.data.toc || []

        // Add copy buttons to code blocks
        html = html.replace(CODE_BLOCK_REGEX, (_, attrs, content) => {
          const cleanAttrs = attrs.replace(DATA_ATTR_REGEX, ' ')
          const plainText = content
            .trim()
            .replace(/<[^>]*>/g, '')
            .replace(/&[^;]+;/g, (match) =>
              match === '&lt;'
                ? '<'
                : match === '&gt;'
                  ? '>'
                  : match === '&amp;'
                    ? '&'
                    : match === '&quot;'
                      ? '"'
                      : match
            )

          return `<div class="code-block-wrapper">
          <CodeCopyButton code={${JSON.stringify(plainText)}} />
            {@html \`<pre${cleanAttrs}>${escapeSvelte(content)}</pre>\`}
          </div>`
        })

        // Add script tags with metadata
        const hasScriptTag = /<script[^>]*>[\s\S]*?<\/script>/i.test(html)
        const metadata = { ...frontmatter, toc }
        const metadataKeys = Object.keys(frontmatter || {})
        const exportsStr = metadataKeys.length
          ? `export const { ${metadataKeys.join(', ')} } = metadata;`
          : ''

        let scriptTags
        if (hasScriptTag) {
          scriptTags = `<script module>
export const metadata = ${JSON.stringify(metadata)};
export const toc = metadata.toc || [];
${exportsStr}
</script>`

          // Add CodeCopyButton import if needed
          html = html.replace(
            /<script([^>]*)>([\s\S]*?)<\/script>/i,
            (match, attrs, content) => {
              const importStmt =
                "import CodeCopyButton from '$lib/components/ui/CodeCopyButton.svelte'"
              if (!content.includes(importStmt)) {
                return `<script${attrs}>
${importStmt};
${content}</script>`
              }
              return match
            }
          )
        } else {
          scriptTags = `<script module>
export const metadata = ${JSON.stringify(metadata)};
export const toc = metadata.toc || [];
${exportsStr}
</script>

<script>
  import CodeCopyButton from '$lib/components/ui/CodeCopyButton.svelte';
</script>
`
        }

        return { code: scriptTags + html }
      } catch (error) {
        throw new Error(
          `Failed to process markdown file ${filename}: ${error.message || error}`
        )
      }
    }
  }
}
