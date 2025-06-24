<script lang="ts">
  import type { Article } from '$lib/types'
  import { formatDate } from '$lib/utils/formatDate'
  import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte'

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
      <ArrowRightIcon
        size={16}
        class="arrow-icon"
      />
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
  .article {
    display: block;
    text-decoration: none;
    color: inherit;

    border-radius: var(--radius-md);
  }

  h3 {
    color: var(--color-neutral-800);
  }

  .article-title {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);

    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .article-title :global(.arrow-icon) {
    opacity: 0;
    transition: opacity var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .article:hover .article-title :global(.arrow-icon) {
    opacity: 1;
  }

  .article-description {
    margin-top: var(--spacing-2);
    color: var(--color-gray-600);

    max-width: var(--width-prose);
  }

  .article-meta {
    margin-top: var(--spacing-3);
    display: block;

    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);

    color: var(--color-gray-500);
  }
</style>
