import { getLatestArticles, type Article } from '$lib/utils/articles.server'

export function load() {
  const articles: Article[] = getLatestArticles()

  return {
    articles
  }
}
