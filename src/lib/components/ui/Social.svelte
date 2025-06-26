<script lang="ts">
  import Link from './Link.svelte'
  import SectionHeading from './SectionHeading.svelte'
</script>

<section>
  <SectionHeading>Get in touch</SectionHeading>

  <p>
    Reach me at
    <Link
      href="https://bsky.app/profile/abdrizik.bsky.social"
      target="_blank"
    >
      @abdrizik
    </Link>
    or
    <Link
      href="mailto:abdelrahman.rizik@gmail.com"
      target="_blank"
    >
      abdelrahman.rizik@gmail.com
    </Link>.
  </p>
</section>

<style>
  p {
    color: var(--color-gray-600);
  }
</style>
