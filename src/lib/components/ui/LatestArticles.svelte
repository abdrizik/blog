<script lang="ts">
  import type { Article } from '$lib/types'
  import ArticlesList from './ArticlesList.svelte'
  import SectionHeading from './SectionHeading.svelte'

  interface Props {
    articles: Article[]
  }

  let { articles }: Props = $props()
</script>

<div>
  <SectionHeading>~/ latest articles</SectionHeading>
  <ArticlesList {articles} />
</div>
