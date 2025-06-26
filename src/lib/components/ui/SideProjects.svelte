<script lang="ts">
  import ArrowUpRightIcon from '$lib/components/icons/ArrowUpRightIcon.svelte'
  import SectionHeading from './SectionHeading.svelte'

  const sideProjects = [
    {
      title: 'CSS Arena',
      description: 'A collection of creative solutions for CSS Battles.',
      status: 'Live',
      url: 'https://css-arena.abdrizik.xyz/'
    },
    {
      title: 'Secret Sauce',
      description:
        "Explore the journey of the web's evolution, from its humble beginnings to the powerful technologies that shape the digital world today.",
      status: 'Soon'
    },
    {
      title: 'Web Pioneers',
      description:
        'A tribute to the visionaries who shaped the web, showcasing the people behind groundbreaking innovations like Linux and others.',
      status: 'Soon'
    }
  ]
</script>

<section>
  <SectionHeading>Side projects</SectionHeading>
  <div class="projects">
    {#each sideProjects as project, index (index)}
      {#if project.url}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          class="project"
        >
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">
                <span>{project.title}</span>
                <ArrowUpRightIcon
                  size={16}
                  class="arrow-icon"
                />
              </h3>
              <span
                class="project-status"
                class:live={project.status === 'Live'}
                class:soon={project.status === 'Soon'}
              >
                {project.status}
              </span>
            </div>
            <p class="project-description">{project.description}</p>
          </div>
        </a>
      {:else}
        <div class="project">
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">
                <span>{project.title}</span>
              </h3>
              <span
                class="project-status"
                class:live={project.status === 'Live'}
                class:soon={project.status === 'Soon'}
              >
                {project.status}
              </span>
            </div>
            <p class="project-description">{project.description}</p>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .projects {
    display: grid;
    gap: var(--spacing-4);
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  .project {
    position: relative;
    display: block;
    padding: var(--spacing-4);
    text-decoration: none;
    color: inherit;

    background: var(--color-gray-50);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-md);

    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);

    &:hover {
      border-color: var(--color-gray-300);
    }
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);

    height: 100%;
  }

  .project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-3);
  }

  .project-title {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--leading-tight);
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--color-neutral-900);
    flex: 1;
  }

  .project-title :global(.arrow-icon) {
    opacity: 0;
    color: var(--color-sea-blue);
    transition: all var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .project:hover .project-title :global(.arrow-icon) {
    opacity: 1;
    transform: translate(2px, -2px);
  }

  .project-status {
    padding: var(--spacing-0) var(--spacing-2);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-tighter);
    flex-shrink: 0;
    border: 1px solid;
  }

  .project-status.live {
    background: oklch(from var(--color-emerald-600) l c h / 0.1);
    color: var(--color-emerald-700);
    border-color: oklch(from var(--color-emerald-600) l c h / 0.2);
  }

  .project-status.soon {
    background: oklch(from var(--color-amber-500) l c h / 0.1);
    color: var(--color-amber-700);
    border-color: oklch(from var(--color-amber-500) l c h / 0.2);
  }

  .project-description {
    font-size: var(--text-sm);
    color: var(--color-gray-600);
    line-height: var(--leading-relaxed);
    margin: 0;
    flex: 1;
  }

  @media (max-width: 640px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .project {
      padding: var(--spacing-4);
    }
  }
</style>
