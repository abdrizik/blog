<script lang="ts">
  const { href, children, target = '', rel = '' } = $props()
</script>

<a
  {href}
  {target}
  {rel}
>
  {@render children()}
</a>

<style>
  a {
    color: var(--color-sea-blue);
    font-weight: var(--font-weight-medium);

    transition:
      color,
      var(--default-transition-duration)
        var(--default-transition-timing-function);

    &:hover {
      color: var(--color-dark-sea-blue);
    }
  }
</style>
