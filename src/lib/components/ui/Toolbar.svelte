<script lang="ts">
  import ArticlesIcon from '$lib/components/icons/ArticlesIcon.svelte'
  import BlueskyIcon from '$lib/components/icons/BlueskyIcon.svelte'
  import HomeIcon from '$lib/components/icons/HomeIcon.svelte'

  let isDark = $state(false)

  function toggleTheme() {
    isDark = !isDark
    document.documentElement.classList.toggle('dark', isDark)
  }
</script>

<div class="toolbar">
  <div class="nav-buttons">
    <a
      href="/"
      class="nav-button"
      aria-label="Home"
    >
      <HomeIcon size={18} />
    </a>

    <div class="divider"></div>

    <a
      href="/articles"
      class="nav-button"
      aria-label="Articles"
    >
      <ArticlesIcon size={18} />
    </a>

    <a
      class="nav-button"
      href="https://bsky.app/profile/abdrizik.bsky.social"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Bluesky"
    >
      <BlueskyIcon size={18} />
    </a>

    <button
      class="nav-button"
      onclick={toggleTheme}
      aria-label="Toggle theme"
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
    background: var(--color-neutral-300);
    align-self: center;
    opacity: 0;
    animation: fadeInUp 0.3s var(--ease-out) forwards;
    animation-delay: calc(0.1s + 1 * 0.07s);
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
    transition:
      background-color var(--default-transition-duration)
        var(--default-transition-timing-function),
      transform var(--default-transition-duration)
        var(--default-transition-timing-function);
    animation: fadeInUp 0.3s var(--ease-out) forwards;
  }

  .nav-buttons > :nth-child(1) {
    animation-delay: calc(0.1s + 0 * 0.07s);
  }
  .nav-buttons > :nth-child(3) {
    animation-delay: calc(0.1s + 2 * 0.07s);
  }
  .nav-buttons > :nth-child(4) {
    animation-delay: calc(0.1s + 3 * 0.07s);
  }
  .nav-buttons > :nth-child(5) {
    animation-delay: calc(0.1s + 4 * 0.07s);
  }

  .nav-button:hover {
    background: var(--color-neutral-100);
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
