<script lang="ts">
  import type { Article } from '$lib/types'
  import { formatDate } from '$lib/utils/formatDate'

  interface Props {
    article: Article
    showCategory?: boolean
    showDate?: boolean
    showDescription?: boolean
  }

  let {
    article,
    showCategory = false,
    showDate = false,
    showDescription = false
  }: Props = $props()
</script>

<a
  href="/articles/{article.slug}"
  class="article"
>
  <div class="article-content">
    {#if showCategory}
      <span class="article-category">
        {article.category}
      </span>
    {/if}

    <h3 class="article-title">
      <span>
        {article.title}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="arrow-icon"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </h3>

    {#if showDescription}
      <p class="article-description">
        {article.description}
      </p>
    {/if}

    {#if showDate}
      <time class="article-meta">
        {formatDate(article.publishAt)}
      </time>
    {/if}
  </div>
</a>

<style>
  .article-content {
    display: flex;
    flex-direction: column;
  }

  .article-category {
    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);
    color: var(--color-gray-500);
  }

  .article-title {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);

    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .arrow-icon {
    opacity: 0;
    transition: opacity var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .article:hover .arrow-icon {
    opacity: 1;
  }

  .article-description {
    margin-top: var(--spacing-2);
    color: var(--color-gray-600);
  }

  .article-meta {
    margin-top: var(--spacing-4);

    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);

    color: var(--color-gray-500);
  }
</style>
