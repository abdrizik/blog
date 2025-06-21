<script lang="ts">
  import Clipboard from '$lib/components/icons/Clipboard.svelte'
  import ClipboardClicked from '$lib/components/icons/ClipboardClicked.svelte'

  const { code }: { code: string } = $props()
  let clicked = $state(false)

  let timeoutId: number
  function copyToClipboard() {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    clicked = true
    navigator.clipboard.writeText(code || '')
    timeoutId = setTimeout(() => (clicked = false), 3000)
  }
</script>

<button
  onclick={copyToClipboard}
  class="copy-code-button"
  title="Copy code"
  aria-label="Copy code to clipboard"
>
  {#if clicked}
    <ClipboardClicked class="icon" />
  {:else}
    <Clipboard class="icon" />
  {/if}
</button>

<style>
  .copy-code-button {
    position: absolute;
    top: var(--spacing-3);
    right: var(--spacing-3);
    z-index: 10;
    padding: var(--spacing-1);
    border-radius: 0.375rem;
    opacity: 0.7;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
  }

  .copy-code-button:hover {
    opacity: 1;
  }

  .copy-code-button :global(.icon) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
</style>
