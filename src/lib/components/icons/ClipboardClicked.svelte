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
    <g stroke-width="2">
      <path
        stroke-dasharray="66"
        stroke-dashoffset="66"
        d="M12 3H19V21H5V3H12Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="66;0"
        ></animate>
      </path>
      <path
        stroke-dasharray="10"
        stroke-dashoffset="10"
        d="M9 13L11 15L15 11"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1s"
          dur="0.2s"
          values="10;0"
        ></animate>
      </path>
    </g>
    <path
      stroke-dasharray="12"
      stroke-dashoffset="12"
      d="M14.5 3.5V6.5H9.5V3.5"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        begin="0.7s"
        dur="0.2s"
        values="12;0"
      ></animate>
    </path>
  </g>
</svg>
