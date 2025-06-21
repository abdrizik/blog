const articles = import.meta.glob<Article>('../../content/**/*.md', {
  eager: true,
  import: 'metadata'
})

export interface Category {
  name: string
  slug: string
  description?: string
}

export interface Article {
  title: string
  description: string
  category: string
  tags: string[]
  publishAt: string
  updatedAt: string
  slug: string
}

// Create enriched articles with slug
const enrichedArticles = Object.entries(articles)
  .map(([path, content]) => {
    const slug = path.replace('../../content/', '').replace(/\.md$/, '')

    return {
      ...content,
      slug
    }
  })
  .sort(
    (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
  )

// Create categories map from articles
const categoriesMap = new Map<string, Category>()
enrichedArticles.forEach((article) => {
  if (!categoriesMap.has(article.category)) {
    categoriesMap.set(article.category, {
      name: article.category,
      slug: article.category.toLowerCase().replace(/\s+/g, '-')
    })
  }
})

export function getArticles(categorySlug?: string): Article[] {
  if (categorySlug) {
    return enrichedArticles.filter((article) => {
      const articleCategorySlug = article.category
        .toLowerCase()
        .replace(/\s+/g, '-')
      return articleCategorySlug === categorySlug
    })
  }

  return enrichedArticles
}

export function getAllCategories(): Category[] {
  return [...categoriesMap.values()].sort((a, b) =>
    a.name.localeCompare(b.name)
  )
}

export function getArticleMetadata(slug: string): Article {
  const article = enrichedArticles.find((article) => article.slug === slug)

  if (!article) {
    throw new Error(`Article with slug "${slug}" not found`)
  }

  return article
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const currentArticle = getArticleMetadata(slug)

  return enrichedArticles
    .filter(
      (article) =>
        article.slug !== slug && article.category === currentArticle.category
    )
    .slice(0, limit)
}

export function getLatestArticles(limit = 3): Article[] {
  return enrichedArticles.slice(0, limit)
}

export function getArticlesByTag(tag: string): Article[] {
  return enrichedArticles.filter((article) =>
    article.tags.some(
      (articleTag) => articleTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>()

  enrichedArticles.forEach((article) => {
    article.tags.forEach((tag) => {
      tagsSet.add(tag)
    })
  })

  return [...tagsSet].sort()
}
