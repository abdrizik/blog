<script lang="ts">
  import Clipboard from '~/lib/components/icons/Clipboard.svelte'
  import ClipboardClicked from '~/lib/components/icons/ClipboardClicked.svelte'

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
  class="copy-code-button absolute top-3 right-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity"
  title="Copy code"
  aria-label="Copy code to clipboard"
>
  {#if clicked}
    <ClipboardClicked class="text-lg" />
  {:else}
    <Clipboard class="text-lg" />
  {/if}
</button>
