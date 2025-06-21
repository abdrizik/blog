import { error } from '@sveltejs/kit'

export async function load({ params, data }) {
  const { slug } = params

  try {
    const module = await import(`$content/${slug}.md`)

    return {
      content: module.default,
      metadata: module.metadata,
      toc: module.toc,
      relatedArticles: data.relatedArticles
    }
  } catch (e) {
    console.error('Error loading lesson:', e)
    // If the file doesn't exist or can't be imported, throw a 404
    throw error(404, `Article not found: ${slug}`)
  }
}
