<script lang="ts">
  interface Props {
    title: string
    description: string
  }

  let { title, description }: Props = $props()
</script>

<div>
  <h1>
    {title}
  </h1>

  <p>
    {description}
  </p>
</div>

<style>
  h1 {
    font-family: var(--font-serif);
    font-size: var(--text-4xl);
    line-height: var(--text-4xl--line-height);
    font-weight: var(--font-weight-medium);

    margin-bottom: var(--spacing-6);
  }

  p {
    color: var(--color-gray-500);
    font-weight: var(--font-weight-normal);
    line-height: var(--text-base--line-height);
    text-wrap: pretty;
  }
</style>
