<script lang="ts">
  import { page } from '$app/state'
  import ArticlesList from '$lib/components/ui/ArticlesList.svelte'
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
    <div class="categories">
      <a
        href="/articles"
        class:active={!selectedCategory}>All</a
      >

      {#each data.categories as category (category.slug)}
        <a
          href="/articles?category={category.slug}"
          class:active={selectedCategory === category.slug}
        >
          {category.name}
        </a>
      {/each}
    </div>

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

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-8);
  }

  .categories a {
    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);
    border-radius: 9999px;
    border: 1px solid var(--color-gray-200);
    color: var(--color-gray-600);
    background-color: white;
    padding: var(--spacing-1) var(--spacing-3);
    cursor: pointer;
    text-decoration: none;
    transition: al var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .categories a:hover {
    background-color: var(--color-gray-200);
    color: var(--color-gray-800);
  }

  .categories a.active {
    background-color: var(--color-gray-900);
    color: var(--color-white);
  }
</style>
