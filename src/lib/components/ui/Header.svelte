<script lang="ts">
</script>

<header>
  <nav>
    <a
      href="/"
      aria-label="Home"
    >
      <div class="logo"></div>
    </a>
  </nav>
</header>

<style>
  header {
    max-width: var(--width-3xl);
    margin-inline: auto;
  }

  nav {
    padding-block-start: var(--spacing-4);
    padding-block-end: var(--spacing-20);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav a {
    margin-top: var(--spacing-8);
  }

  .logo {
    width: 3rem;
    height: 3rem;
    background-color: #d1fae5;
    border-radius: 0.5rem;
  }
</style>
