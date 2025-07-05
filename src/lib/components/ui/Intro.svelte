<script lang="ts">
  import Link from './Link.svelte'
</script>

<div class="intro">
  <h1 class="fade-in">Abdelrahman Rizik</h1>
  <p class="fade-in delay-1">
    <em>Building for the web</em>. Focused on frontend development and CSS
    craftsmanship. Working with diverse frameworks to create seamless user
    experiences. Software Engineer at
    <Link
      href="https://ard.co"
      rel="noopener"
      target="_blank"
    >
      ARD
    </Link>.
  </p>
  <p class="fade-in delay-2">
    Passionate about sharing knowledge through tutorials and exploring new web
    technologies.
  </p>
</div>

<style>
  .intro {
    opacity: 1;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(8px);
    animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .delay-1 {
    animation-delay: 0.15s;
  }

  .delay-2 {
    animation-delay: 0.3s;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(8px);
    }
    60% {
      opacity: 0.8;
      transform: translateY(-1px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: var(--text-lg);
    color: var(--color-gray-900);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--tracking-tight);

    margin-bottom: var(--spacing-6);
  }

  p {
    color: var(--color-gray-600);
    font-weight: var(--font-weight-normal);
    font-size: var(--text-base);
    line-height: var(--text-base--line-height);

    margin-bottom: var(--spacing-4);

    /* text-wrap: balance; */
  }

  em {
    font-family: var(--font-serif);

    color: var(--color-gray-700);
    transition: color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
</style>
