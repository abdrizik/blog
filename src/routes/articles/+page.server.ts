import { getArticles, getAllCategories } from '$lib/utils/articles.server'
import type { Article, Category } from '$lib/utils/articles.server'

export function load({ url }) {
  const categorySlug = url.searchParams.get('category')

  const articles: Article[] = getArticles(categorySlug || undefined)
  const categories: Category[] = getAllCategories()

  return {
    articles,
    categories,
    selectedCategory: categorySlug
  }
}
