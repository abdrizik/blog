<script lang="ts">
  interface Props {
    size?: number | string
    class?: string
  }

  let { size = 20, class: className = '' }: Props = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
>
  <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
</svg>
