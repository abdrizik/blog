<script lang="ts">
  import ArticleHeader from '$lib/components/ui/ArticleHeader.svelte'
  import RelatedArticles from '../../../lib/components/ui/RelatedArticles.svelte'

  const { data } = $props()

  const { content, metadata, relatedArticles } = $derived(data)
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta
    name="description"
    content={metadata.description}
  />
</svelte:head>

<div>
  <ArticleHeader {metadata} />

  <div class="prose">
    {@render content()}
  </div>

  <RelatedArticles articles={relatedArticles || []} />
</div>
