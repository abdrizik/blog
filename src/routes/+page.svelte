<script lang="ts">
  import Intro from '$lib/components/ui/Intro.svelte'
  import LatestArticles from '$lib/components/ui/LatestArticles.svelte'
  import SideProjects from '$lib/components/ui/SideProjects.svelte'
  import Social from '$lib/components/ui/Social.svelte'
  import type { Article } from '$lib/types'
  import Inspirations from '$lib/components/ui/Inspirations.svelte'

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

  <!-- Open Graph -->
  <meta property="og:title" content="Abdelrahman Rizik - Software Engineer" />
  <meta
    property="og:description"
    content="Software Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />
  <meta property="og:url" content="https://abdrizik.xyz/" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="Abdelrahman Rizik - Software Engineer" />
  <meta
    name="twitter:description"
    content="Software Engineer passionate about modern web technologies. I build applications with JavaScript, TypeScript, Vue, React, SvelteKit, and Node.js."
  />

  <!-- Keywords -->
  <meta
    name="keywords"
    content="Abdelrahman Rizik, Software Engineer, JavaScript, TypeScript, Vue, React, SvelteKit, Node.js, Web Development"
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://abdrizik.xyz/" />
</svelte:head>

<div class="home-page">
  <Intro />

  <LatestArticles articles={data.articles} />
  <SideProjects />

  <Inspirations />

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

  @media (max-width: 48rem) {
    .home-page {
      gap: var(--spacing-16);
    }
  }
</style>
