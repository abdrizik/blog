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
  h2 {
    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);
    font-weight: var(--font-weight-normal);
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-4);
  }
</style>
