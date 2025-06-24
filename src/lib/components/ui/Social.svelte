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
  <SectionHeading>Content</SectionHeading>

  <p>
    Reach me at <a
      href="https://bsky.app/profile/abdrizik.bsky.social"
      target="_blank"
    >
      @abdrizik
    </a>
    or
    <a
      href="mailto:abdelrahman.rizik@gmail.com"
      target="_blank"
    >
      abdelrahman.rizik@gmail.com
    </a>.
  </p>
</section>

<style>
  p {
    color: var(--color-gray-600);
  }
  a {
    color: var(--color-gray-900);

    text-decoration: none;
    text-decoration: underline var(--color-gray-400) 1px;
    text-underline-offset: 2px;

    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--color-gray-700);
    text-decoration-color: var(--color-gray-600);
  }
</style>
