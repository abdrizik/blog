<script lang="ts">
  interface Props {
    src: string
    alt: string
    caption?: string
  }

  const { src, alt, caption }: Props = $props()
</script>

<div class="book-cover">
  <div class="book-wrapper">
    <img
      {src}
      {alt}
    />
  </div>
  {#if caption}
    <p class="book-caption">{caption}</p>
  {/if}
</div>

<style>
  .book-cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--spacing-8);
  }

  img {
    margin-inline: auto;
    max-width: 450px;
  }

  .book-wrapper {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    aspect-ratio: 3/4;
  }

  .book-caption {
    margin-top: var(--spacing-3);
    font-size: var(--text-sm);
    color: var(--color-neutral-600);
    font-style: italic;
    text-align: center;
    line-height: var(--leading-relaxed);
  }

  @media (max-width: 640px) {
    .book-cover {
      max-width: 250px;
    }
  }
</style>
