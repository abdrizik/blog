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
    text-decoration: underline;
    text-decoration-color: var(--color-gray-300);
    text-decoration-thickness: 0.5px;
    text-underline-offset: 4px;
    text-decoration-style: solid;

    color: var(--color-gray-800);
  }

  /* Alternative: using border for more control */
  /* a {
    text-decoration: none;
    border-bottom: 2px solid var(--color-blue-500);
    padding-bottom: 1px;
  } */
</style>
