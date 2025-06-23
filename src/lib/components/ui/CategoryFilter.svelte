<script lang="ts">
  import type { Category } from '$lib/utils/articles.server'

  interface Props {
    categories: Category[]
    selectedCategory: string | null
  }

  const { categories, selectedCategory }: Props = $props()
</script>

<div class="categories">
  <a
    href="/articles"
    class:active={!selectedCategory}
  >
    All
  </a>

  {#each categories as category (category.slug)}
    <a
      href="/articles?category={category.slug}"
      class:active={selectedCategory === category.slug}
    >
      {category.name}
    </a>
  {/each}
</div>

<style>
  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-8);
  }

  .categories a {
    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);

    border-radius: var(--radius-full);
    border: 1px solid var(--color-gray-200);

    color: var(--color-gray-600);
    background-color: white;

    padding: var(--spacing-1) var(--spacing-3);
    cursor: pointer;
    text-decoration: none;

    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);

    &::hover {
      background-color: var(--color-gray-200);
      color: var(--color-gray-800);
    }

    &.active {
      background-color: var(--color-sea-blue);
      color: var(--color-white);
    }
  }
</style>
