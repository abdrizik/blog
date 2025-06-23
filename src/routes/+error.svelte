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
  <div class="error-header">
    <div class="error-badge">{is404 ? '404' : '500'}</div>
    <h1>{heading}</h1>
    <p>{abortReason}</p>
  </div>

  <div class="error-actions">
    <a
      href="/"
      class="button primary-button"
    >
      <HomeIcon size={16} />
      <span>Back to Home</span>
    </a>

    <button
      onclick={goBack}
      class="button secondary-button"
    >
      <ArrowLeftIcon size={16} />
      <span>Go Back</span>
    </button>
  </div>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-12) var(--spacing-4);
    max-width: 800px;
    margin: 0 auto;
    min-height: 50vh;
  }

  .error-header {
    text-align: center;
    margin-bottom: var(--spacing-12);
  }

  .error-badge {
    display: inline-block;
    padding: var(--spacing-1) var(--spacing-4);
    background-color: var(--color-gray-900);
    color: var(--color-white);
    border-radius: 0.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-4);
    font-size: 0.875rem;
  }

  .error-header h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-family: var(--font-serif);
    font-weight: 500;
    margin-bottom: var(--spacing-4);
  }

  .error-header p {
    margin-bottom: var(--spacing-8);
    color: var(--color-gray-600);
    font-size: 1.125rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
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
    border-radius: 9999px;
    padding: var(--spacing-2) var(--spacing-4);
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .primary-button,
  .secondary-button {
    border: 1px solid var(--color-gray-200);
    transition: background-color var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .primary-button {
    background-color: var(--color-sea-blue);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-dark-sea-blue);
    }
  }

  .secondary-button {
    background-color: var(--color-white);
    color: var(--color-gray-900);

    &:hover {
      background-color: var(--color-gray-200);
    }
  }

  @media (max-width: 640px) {
    .error-actions {
      flex-direction: column;
      width: 100%;
    }

    .primary-button,
    .secondary-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>
