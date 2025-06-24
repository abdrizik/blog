<script lang="ts">
  let { class: className = "" } = $props()
</script>

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="16" 
  height="16" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class={className}
>
  <path d="M7 7h10v10"/>
  <path d="M7 17 17 7"/>
</svg>
