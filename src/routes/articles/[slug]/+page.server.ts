import { getRelatedArticles } from '../../../lib/utils/articles.server'

export function load({ params }) {
  const { slug } = params

  const relatedArticles = getRelatedArticles(slug, 3)

  return {
    relatedArticles
  }
}
