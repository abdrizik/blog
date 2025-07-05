import rehypeShiki from '@shikijs/rehype'
import adapter from '@sveltejs/adapter-auto'
import remarkGfm from 'remark-gfm'

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdPreprocess } from './src/lib/preprocess/markdown.js'
import syntaxThemeLight from './src/lib/themes/syntax-theme-light.json' with { type: 'json' }

import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRenderWhitespace
} from '@shikijs/transformers'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdPreprocess({
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: syntaxThemeLight,
            transformers: [
              transformerNotationDiff(),
              transformerMetaHighlight(),
              transformerNotationHighlight(),
              transformerNotationErrorLevel(),
              transformerNotationFocus(),
              transformerNotationWordHighlight(),
              transformerRenderWhitespace()
            ]
          }
        ]
      ],
      remarkPlugins: [remarkGfm]
    })
  ],
  extensions: ['.svelte', '.md'],

  compilerOptions: {
    runes: true
  },
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      '~': 'src',
      $content: 'src/content'
    }
  }
}

export default config
