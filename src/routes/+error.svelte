<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/state'
  import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
  import HomeIcon from '$lib/components/icons/HomeIcon.svelte'

  const status = $derived(page.status)
  const error = $derived(page.error)

  const is404 = $derived(status === 404)
  const abortReason = $derived(
    error?.message ||
      (is404
        ? 'This page could not be found. It might have been moved or deleted.'
        : 'Something went wrong while processing your request. Please try again later.')
  )
  const heading = $derived(is404 ? 'Page Not Found' : 'Internal Server Error')

  function goBack(): void {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      goto('/')
    }
  }
</script>

<svelte:head>
  <title>{heading} | Abdelrahman Rizik</title>
  <meta
    name="description"
    content={abortReason}
  />
</svelte:head>

<div class="error-container">
  <div class="error-content">
    <div class="error-badge">{status}</div>
    <h1 class="error-title">{heading}</h1>
    <p class="error-description">{abortReason}</p>

    <div class="error-actions">
      <a
        href="/"
        class="button primary-button"
      >
        <HomeIcon size={16} />
        <span>Home</span>
      </a>

      <button
        onclick={goBack}
        class="button secondary-button"
      >
        <ArrowLeftIcon size={16} />
        <span>Back</span>
      </button>
    </div>
  </div>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-12) var(--spacing-4);
    max-width: var(--width-3xl);
    margin: 0 auto;
  }

  .error-content {
    text-align: center;
    max-width: 600px;
  }

  .error-badge {
    display: inline-block;
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-gray-100);
    color: var(--color-gray-700);
    border-radius: var(--radius-full);
    font-weight: var(--font-weight-medium);
    font-size: var(--text-sm);
    margin-bottom: var(--spacing-6);
  }

  .error-title {
    font-size: var(--text-3xl);
    font-family: var(--font-serif);
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-900);
    margin-bottom: var(--spacing-4);
    letter-spacing: var(--tracking-tight);
  }

  .error-description {
    color: var(--color-gray-600);
    font-size: var(--text-lg);
    line-height: var(--text-lg--line-height);
    margin-bottom: var(--spacing-12);
    text-wrap: balance;
  }

  .error-actions {
    display: flex;
    gap: var(--spacing-4);
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    border-radius: var(--radius-full);
    padding: var(--spacing-2) var(--spacing-4);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);
    border: 1px solid var(--color-gray-200);
  }

  .primary-button {
    background-color: var(--color-sea-blue);
    color: var(--color-white);
    border-color: var(--color-sea-blue);
  }

  .primary-button:hover {
    background-color: var(--color-dark-sea-blue);
    border-color: var(--color-dark-sea-blue);
  }

  .secondary-button {
    background-color: var(--color-white);
    color: var(--color-gray-900);
    border-color: var(--color-gray-200);
  }

  .secondary-button:hover {
    background-color: var(--color-gray-50);
    border-color: var(--color-gray-300);
  }

  @media (max-width: 640px) {
    .error-container {
      padding: var(--spacing-8) var(--spacing-4);
      min-height: 60vh;
    }

    .error-actions {
      flex-direction: column;
      width: 100%;
    }

    .button {
      width: 100%;
      justify-content: center;
    }
  }
</style>
