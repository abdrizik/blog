<script lang="ts">
  interface Props {
    size?: number | string
    class?: string
  }

  let { size = 20, class: className = '', ...props }: Props = $props()
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  class={className}
  {...props}
>
  <g
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      stroke-width="2"
      d="M12 3H19V21H5V3H12Z"
    ></path>
    <path d="M14.5 3.5V6.5H9.5V3.5"></path>
  </g>
</svg>
