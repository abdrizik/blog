<script lang="ts">
  import SectionHeading from './SectionHeading.svelte'

  const socialPlatforms = [
    {
      label: 'Bluesky',
      href: ''
    },
    {
      label: 'LinkedIn',
      href: ''
    },
    {
      label: 'GitHub',
      href: ''
    }
  ]
</script>

<section>
  <SectionHeading>~/ find me online</SectionHeading>

  <div class="social-links">
    {#each socialPlatforms as platform}
      <a
        href={platform.href}
        class="social-link"
      >
        {platform.label}
      </a>
    {/each}
  </div>
</section>

<style>
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
  }

  .social-link {
    background-color: var(--color-neutral-800);
    color: white;

    border-radius: var(--radius-full);
    padding: var(--spacing-2) var(--spacing-4);

    font-size: var(--text-sm);
    line-height: var(--text-sm--line-height);

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    transition: background-color 0.3s;
  }

  .social-link:hover {
    background-color: var(--color-neutral-900);
  }
</style>
