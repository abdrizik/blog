<script lang="ts">
  import { formatDate } from '$lib/utils/formatDate'

  let { metadata } = $props()
</script>

<div class="article-header">
  <h1>{metadata.title}</h1>

  <dl>
    <dt>Published under</dt>
    <dd>
      <a href="/articles?category={metadata.category.toLowerCase()}">
        {metadata.category}
      </a>
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
    margin-bottom: var(--spacing-28);

    max-width: var(--width-3xl);
    margin-inline: auto;
  }

  h1 {
    font-size: var(--text-5xl);
    line-height: var(--text-5xl--line-height);
    font-family: var(--font-serif);
    font-weight: var(--font-weight-medium);

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

  dd:first-of-type {
    font-weight: var(--font-weight-medium);
  }
</style>
