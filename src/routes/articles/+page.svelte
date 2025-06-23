<script lang="ts">
  import { page } from '$app/state'
  import ArticlesList from '$lib/components/ui/ArticlesList.svelte'
  import CategoryFilter from '$lib/components/ui/CategoryFilter.svelte'
  import PageHeader from '$lib/components/ui/PageHeader.svelte'
  import type { Article, Category } from '$lib/utils/articles.server'

  interface PageData {
    articles: Article[]
    categories: Category[]
    selectedCategory: string | null
  }

  const { data }: { data: PageData } = $props()

  const selectedCategory = $derived(page.url.searchParams.get('category'))

  const filteredArticles = $derived(
    !selectedCategory
      ? data.articles
      : data.articles.filter((article) => {
          const articleCategorySlug = article.category
            .toLowerCase()
            .replace(/\s+/g, '-')
          return articleCategorySlug === selectedCategory
        })
  )
</script>

<svelte:head>
  <title>Articles & Thoughts</title>
  <meta
    name="description"
    content="I write about design systems, UI engineering, and the intersection of design and development. Here's a collection of my latest articles and insights."
  />
</svelte:head>

<div class="articles-page">
  <PageHeader
    title="Articles & Thoughts"
    description="I write about design systems, UI engineering, and the intersection of design and development. Here's a collection of my latest articles and insights."
  />

  <div>
    <CategoryFilter categories={data.categories} {selectedCategory} />
    <ArticlesList articles={filteredArticles} />
  </div>
</div>

<style>
  .articles-page {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20);
    max-width: var(--width-3xl);
    margin-inline: auto;
  }
</style>
