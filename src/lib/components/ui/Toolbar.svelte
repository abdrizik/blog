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
      <HomeIcon />
    </a>

    <div class="divider"></div>

    <a
      href="/articles"
      class="nav-button"
      aria-label="Articles"
    >
      <ArticlesIcon />
    </a>

    <a
      class="nav-button"
      href="https://bsky.app/profile/abdrizik.bsky.social"
      target="_blank"
      aria-label="Bluesky"
    >
      <BlueskyIcon />
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
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toolbar {
    position: fixed;
    bottom: 18px;
    left: 50%;

    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--color-neutral-400);
    background: rgba(28, 28, 30, 0.85);
    backdrop-filter: blur(8px);

    border-radius: 12px;
    padding: var(--spacing-2) var(--spacing-4);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-neutral-500);

    animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .divider {
    width: 1px;
    height: 24px;
    background: var(--color-neutral-500);
    align-self: center;
    opacity: 0;
    animation: fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(0.1s + 1 * 0.07s);
  }

  .nav-buttons {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .nav-button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 0;
    opacity: 0;
    animation: fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
    background: rgba(255, 255, 255, 0.1);
  }

  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #646466;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dot.active {
    background: #fff;
    transform: scale(1.1);
  }

  :global(html.dark) .dot {
    background: #fff;
  }
</style>
