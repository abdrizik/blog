<script lang="ts">
  import type { Article } from '$lib/utils/articles.server'
  import { formatDate } from '$lib/utils/formatDate'
  import Link from './Link.svelte'

  let { metadata }: { metadata: Article } = $props()
</script>

<div class="article-header">
  <h1>{metadata.title}</h1>

  <dl>
    <dt>Published under</dt>
    <dd>
      <Link href="/articles?category={metadata.categorySlug}">
        {metadata.category}
      </Link>
    </dd>

    <dt>on</dt>
    <dd>
      {formatDate(metadata.publishAt)}
      <span>.</span>
    </dd>
  </dl>
</div>

<style>
  .article-header {
    margin-bottom: var(--spacing-16);

    max-width: var(--width-3xl);
    margin-inline: auto;
  }

  h1 {
    font-size: var(--text-4xl);
    font-family: var(--font-serif);
    font-weight: var(--font-weight-medium);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tighter);

    color: var(--color-neutral-800);
    margin-bottom: var(--spacing-6);
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-1);

    color: var(--color-neutral-500);
    font-size: var(--text-base);
    line-height: var(--text-base--line-height);
  }

  dd {
    color: var(--color-neutral-800);
  }
</style>
