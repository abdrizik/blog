<script lang="ts">
  import Intro from '$lib/components/ui/Intro.svelte'
  import LatestArticles from '$lib/components/ui/LatestArticles.svelte'
  import SideProjects from '$lib/components/ui/SideProjects.svelte'
  import Social from '$lib/components/ui/Social.svelte'
  import type { Article } from '$lib/types'

  interface PageData {
    articles: Article[]
  }

  let { data }: { data: PageData } = $props()
</script>

<svelte:head>
  <title>Abdelrahman Rizik - Software Engineer</title>
  <meta
    name="description"
    content="Software Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />
</svelte:head>

<div class="home-page">
  <!-- <PageHeader
    title="I design. I code. I learn."
    description="Currently at Ard. Re:Coded alum. I focus on frontend because I care about how things look and feel. I mess with CSS, draw with code, and keep learning every day."
  /> -->
  <Intro />

  <LatestArticles articles={data.articles} />
  <SideProjects />

  <Social />
</div>

<style>
  .home-page {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20);

    max-width: var(--width-3xl);
    margin-inline: auto;
  }
</style>
