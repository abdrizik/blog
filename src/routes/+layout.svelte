<script lang="ts">
  import Blur from '$lib/components/ui/Blur.svelte'
  import Toolbar from '$lib/components/ui/Toolbar.svelte'
  import '$lib/styles/main.css'
  import Header from '../lib/components/ui/Header.svelte'

  const { children } = $props()
</script>

<div class="layout">
  <Header />

  <main>
    {@render children()}
  </main>

  <Toolbar />
  <Blur />
</div>

<style>
  .layout {
    background: var(--color-cream);
    max-width: var(--width-8xl);
    min-height: 100svh;

    margin-inline: auto;
    padding-inline: var(--spacing-4);
    padding-bottom: var(--spacing-48);

    font-optical-sizing: auto;
    font-family: var(--default-font-family);
    font-feature-settings: var(--default-font-feature-settings);
    font-variation-settings: var(--default-font-variation-settings);
  }
</style>
