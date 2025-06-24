<script lang="ts">
  import { page } from '$app/state'
  import ArticlesIcon from '$lib/components/icons/ArticlesIcon.svelte'
  import BlueskyIcon from '$lib/components/icons/BlueskyIcon.svelte'
  import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte'
  import HomeIcon from '$lib/components/icons/HomeIcon.svelte'

  let isDark = $state(false)
  let href = $derived(page.url.pathname)

  function toggleTheme() {
    isDark = !isDark
    document.documentElement.classList.toggle('dark', isDark)
  }

  const navigationLinks = [
    {
      href: '/',
      icon: HomeIcon,
      label: 'Home',
      isActive: () => href === '/'
    },
    {
      href: '/articles',
      icon: ArticlesIcon,
      label: 'Articles',
      isActive: () => href.includes('/articles')
    }
  ]

  const socialLinks = [
    {
      href: 'https://github.com/abdrizik/',
      icon: GitHubIcon,
      label: 'GitHub',
      external: true
    },
    {
      href: 'https://bsky.app/profile/abdrizik.bsky.social',
      icon: BlueskyIcon,
      label: 'Bluesky',
      external: true
    }
  ]
</script>

<div class="toolbar">
  <div class="nav-buttons">
    <!-- Navigation Routes -->
    {#each navigationLinks as link, index}
      <a
        href={link.href}
        class="nav-button"
        class:active={link.isActive()}
        aria-label={link.label}
        style="animation-delay: {0.1 + index * 0.07}s"
      >
        <link.icon size={18} />
      </a>
    {/each}

    <div
      class="divider"
      style="animation-delay: {0.1 + navigationLinks.length * 0.07}s"
    ></div>

    <!-- Social Accounts -->
    {#each socialLinks as link, index}
      <a
        class="nav-button"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        style="animation-delay: {0.1 +
          (navigationLinks.length + 1 + index) * 0.07}s"
      >
        {#key link.icon}
          <link.icon size={18} />
        {/key}
      </a>
    {/each}

    <div
      class="divider"
      style="animation-delay: {0.1 +
        (navigationLinks.length + socialLinks.length + 1) * 0.07}s"
    ></div>

    <!-- Theme Toggle -->
    <button
      class="nav-button"
      aria-label="Toggle theme"
      style="animation-delay: {0.1 +
        (navigationLinks.length + socialLinks.length + 2) * 0.07}s"
    >
      <div
        class="dot"
        class:active={isDark}
      ></div>
    </button>
  </div>
</div>

<style>
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(var(--spacing-4));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toolbar {
    position: fixed;
    bottom: var(--spacing-4);
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    gap: var(--spacing-3);

    color: var(--color-neutral-600);
    background: #ffffff;
    backdrop-filter: blur(var(--blur-md));

    border-radius: var(--radius-xl);
    padding: var(--spacing-2) var(--spacing-4);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--color-neutral-200);
    z-index: 5;

    animation: slideUp 0.3s var(--ease-out) forwards;
  }

  .divider {
    width: 1px;
    height: var(--spacing-6);
    background: var(--color-neutral-200);
    align-self: center;
    opacity: 0;
    animation: fadeInUp 0.3s var(--ease-out) forwards;
  }

  .nav-buttons {
    display: flex;
    align-items: center;
    gap: var(--spacing-1_5);
  }

  .nav-button {
    width: var(--spacing-8);
    height: var(--spacing-8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 0;
    opacity: 0;
    position: relative;
    transition:
      background-color var(--default-transition-duration)
        var(--default-transition-timing-function),
      transform var(--default-transition-duration)
        var(--default-transition-timing-function),
      color var(--default-transition-duration)
        var(--default-transition-timing-function);
    animation: fadeInUp 0.3s var(--ease-out) forwards;
  }

  .nav-button::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 4px;
    height: 4px;
    background: var(--color-sea-blue);
    border-radius: var(--radius-full);
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .nav-button.active {
    color: var(--color-sea-blue);
  }

  .nav-button.active::after {
    opacity: 1;
    transform: scale(1);
    animation: dotBounce 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @keyframes dotBounce {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.3);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .nav-button:hover {
    background: var(--color-border-light);
    color: var(--color-sea-blue);
    transform: scale(1.05);
  }

  .nav-button:active {
    transform: scale(0.95);
  }

  .dot {
    width: var(--spacing-5);
    height: var(--spacing-5);
    border-radius: var(--radius-full);
    background: var(--color-neutral-400);
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .dot.active {
    background: var(--color-neutral-800);
    transform: scale(1.1);
  }
</style>
