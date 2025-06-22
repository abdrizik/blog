<script lang="ts">
  import Header from '$lib/components/ui/Header.svelte'
  import Toolbar from '$lib/components/ui/Toolbar.svelte'
  import Blur from '$lib/components/ui/Blur.svelte'
  import '$lib/styles/main.css'

  const { children } = $props()
</script>

<div>
  <div class="layout">
    <Header />
    <main>
      {@render children()}
    </main>
    <Toolbar />
  </div>
  <Blur />
</div>

<style>
  .layout {
    /* display: grid; */
    /* grid-template-rows: auto 1fr auto; */

    max-width: var(--width-8xl);
    margin-inline: auto;

    min-height: 100svh;

    padding-inline: var(--spacing-4);

    font-family: var(--font-sans);
    font-optical-sizing: auto;

    padding-bottom: var(--spacing-48);
  }
</style>
