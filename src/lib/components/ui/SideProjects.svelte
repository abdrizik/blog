<script lang="ts">
  import SectionHeading from './SectionHeading.svelte'

  const sideProjects = [
    {
      icon: '🎨',
      title: 'CSS Arena',
      description: 'A collection of creative solutions for CSS Battles.',
      status: 'Live'
    },
    {
      icon: '💻',
      title: 'Secret Sauce',
      description:
        "Explore the journey of the web's evolution, from its humble beginnings to the powerful technologies that shape the digital world today.",
      status: 'Soon'
    },
    {
      icon: '👥',
      title: 'Web Pioneers',
      description:
        'A tribute to the visionaries who shaped the web, showcasing the people behind groundbreaking innovations like GitHub and others.',
      status: 'Soon'
    }
  ]
</script>

<section>
  <SectionHeading>~/ side projects</SectionHeading>
  <div class="projects">
    {#each sideProjects as project, index (index)}
      <div class="project">
        <div class="project-icon">
          {project.icon}
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">{project.title}</h3>
          </div>
          <p class="project-description">{project.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .project {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .project-icon {
    width: 2rem;
    height: 2rem;
    background-color: #f3f4f6;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-content {
    flex: 1;
  }

  .project-title {
    font-weight: 500;
  }

  .project-description {
    font-size: 0.875rem;
    color: #4b5563;
  }
</style>
