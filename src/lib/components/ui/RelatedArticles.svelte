<script lang="ts">
  import type { Article } from '$lib/types'
  import ArticleComponent from './Article.svelte'
  import SectionHeading from './SectionHeading.svelte'

  interface Props {
    articles: Article[]
  }

  let { articles }: Props = $props()
</script>

{#if articles.length}
  <div class="related-articles">
    <hr />

    <SectionHeading>Related articles</SectionHeading>

    <div class="articles">
      {#each articles as article (article.slug)}
        <ArticleComponent
          {article}
          showDate={true}
        />
      {/each}
    </div>
  </div>
{/if}

<style>
  .related-articles {
    max-width: var(--width-3xl);
    margin-inline: auto;
  }

  .related-articles hr {
    margin-bottom: var(--spacing-20);
    margin-top: var(--spacing-12);

    border-top: 1px solid var(--color-neutral-300);
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }
</style>
