<script lang="ts">
  import SectionHeading from './SectionHeading.svelte'

  const collaborators = [
    'Suhaib Shakra',
    'Osama Haikal',
    'Maher',
    '@pixeljanitor',
    '@almonk',
    '@sklcrn'
  ]
</script>

<section>
  <SectionHeading>
    ~/ some amazing people I have collaborated with
  </SectionHeading>

  <div class="collaborators">
    {#each collaborators as collaborator, index (index)}
      <div class="collaborator">
        {collaborator}
      </div>
    {/each}
  </div>
</section>

<style>
  .collaborators {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .collaborator {
    background-color: #f3f4f6;
    border-radius: 4px;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
  }
</style>
