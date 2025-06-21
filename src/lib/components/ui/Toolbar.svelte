<script lang="ts">
  // Simple theme store - you may want to replace this with your actual theme implementation
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
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="house"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path
          d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        />
      </svg>
    </a>

    <div class="divider"></div>

    <a
      href="/articles"
      class="nav-button"
      aria-label="Articles"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path
          d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
        />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
      </svg>
    </a>

    <a
      class="nav-button"
      href="https://bsky.app/profile/abdrizik.bsky.social"
      target="_blank"
      aria-label="Bluesky"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path
          d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z"
        />
      </svg>
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
    transform: translateX(-50%);
    padding: var(--spacing-2) var(--spacing-4);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    border: 1px solid var(--color-neutral-500);
  }

  .divider {
    width: 1px;
    height: 24px;
    background: var(--color-neutral-500);
    align-self: center;
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
    transition: background 0.2s;
    color: inherit;
    padding: 0;
  }

  .nav-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #646466;
    transition: background 0.3s ease-out;
  }

  .dot.active {
    background: #fff;
  }

  :global(html.dark) .dot {
    background: #fff;
  }

  .nav-button svg {
    display: block;
  }
</style>
