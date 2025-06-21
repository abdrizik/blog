<script lang="ts">
  import type { Article } from '$lib/types'
  import ArticleComponent from './Article.svelte'

  interface Props {
    articles: Article[]
  }

  let { articles }: Props = $props()
</script>

<div class="articles">
  {#each articles as article (article.slug)}
    <ArticleComponent
      {article}
      showDate={true}
      showDescription={true}
    />
  {/each}
</div>

<style>
  .articles {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-10);
  }
</style>
