<script lang="ts">
  import SectionHeading from './SectionHeading.svelte'
</script>

<section>
  <SectionHeading>Get in touch</SectionHeading>

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
    color: var(--color-sea-blue);
    font-weight: var(--font-weight-medium);
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 2px;

    transition-property: color, text-decoration-color;
    transition-duration: var(--default-transition-duration);
    transition-timing-function: var(--default-transition-timing-function);
  }

  a:hover {
    color: var(--color-dark-sea-blue);
    text-decoration-color: var(--color-dark-sea-blue);
  }
</style>
