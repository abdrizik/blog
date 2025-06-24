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
  class:copied={clicked}
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
    border-radius: var(--radius-md);
    border: none;
    background-color: transparent;
    color: var(--color-dark-sea-blue);
    cursor: pointer;
    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);
    opacity: 0.6;
  }

  .copy-code-button:hover {
    color: var(--color-sea-blue);
    opacity: 1;
  }

  .copy-code-button.copied {
    color: var(--color-sea-blue);
    opacity: 1;
  }

  .copy-code-button.copied:hover {
    color: var(--color-medium-sea-blue);
  }

  .copy-code-button :global(.icon) {
    font-size: var(--text-lg);
    line-height: var(--text-lg--line-height);
  }
</style>
