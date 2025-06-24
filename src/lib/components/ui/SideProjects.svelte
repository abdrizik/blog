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
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .project {
    display: block;
    text-decoration: none;
    color: inherit;
    border-radius: var(--radius-md);
  }

  .project-content {
    width: 100%;
  }

  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-2);
  }

  .project-title {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    margin: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--color-neutral-800);
  }

  .project-title :global(.arrow-icon) {
    opacity: 0;
    transition: opacity var(--default-transition-duration)
      var(--default-transition-timing-function);
  }

  .project:hover .project-title :global(.arrow-icon) {
    opacity: 1;
  }

  .project-status {
    padding: var(--spacing-1) var(--spacing-2);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    flex-shrink: 0;
  }

  .project-status.live {
    background-color: var(--color-emerald-100);
    color: var(--color-emerald-700);
  }

  .project-status.soon {
    background-color: var(--color-amber-100);
    color: var(--color-amber-700);
  }

  .project-description {
    font-size: var(--text-sm);
    color: var(--color-gray-600);
    line-height: var(--leading-relaxed);
    margin: 0;
    max-width: var(--width-prose);
  }
</style>
