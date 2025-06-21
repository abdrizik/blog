<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    children: Snippet
  }

  let { children }: Props = $props()
</script>

<h2 class="section-heading">
  {@render children()}
</h2>

<style>
  .section-heading {
    font-size: 0.875rem;
    color: var(--color-gray-400);
    margin-bottom: 1rem;
  }
</style>
