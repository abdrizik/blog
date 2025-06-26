<script lang="ts">
  import SectionHeading from './SectionHeading.svelte'

  const inspirations = [
    {
      name: 'Brad Traversy',
      url: 'https://x.com/traversymedia',
      avatar:
        'https://pbs.twimg.com/profile_images/856983737426423809/6jebtwP-_400x400.jpg'
    },
    {
      name: 'Dan Abramov',
      url: 'https://bsky.app/profile/danabra.mov',
      avatar:
        'https://cdn.bsky.app/img/avatar/plain/did:plc:fpruhuo22xkm5o7ttr2ktxdo/bafkreif43mhqajnbnl62u3ezf37g6x22nd762im54thxbil4ga46eugcga@jpeg'
    },
    {
      name: 'Emil Kowalski',
      url: 'https://x.com/emilkowalski_',
      avatar:
        'https://pbs.twimg.com/profile_images/1469017066795679751/CjEOyirb_400x400.jpg'
    },
    {
      name: 'Evan You',
      url: 'https://x.com/youyuxi',
      avatar:
        'https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg'
    },
    {
      name: 'Josh W. Comeau',
      url: 'https://bsky.app/profile/joshwcomeau.com',
      avatar:
        'https://cdn.bsky.app/img/avatar/plain/did:plc:zivbusxwcsom5o6mf7kljzms/bafkreibsa7me52rykre4zbykvigeks3a4jbjmdizavxj5bmwwmld3yyyba@jpeg'
    },
    {
      name: 'Rich Harris',
      url: 'https://x.com/rich_harris',
      avatar:
        'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg'
    },
    {
      name: 'Una',
      url: 'https://x.com/una',
      avatar:
        'https://pbs.twimg.com/profile_images/1587634978308997121/u7009cGe_400x400.jpg'
    },
    {
      name: 'Wes Bos',
      url: 'https://x.com/wesbos',
      avatar:
        'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg'
    }
  ]
</script>

<section>
  <SectionHeading>People who inspired my journey</SectionHeading>

  <div class="inspirations">
    {#each inspirations as inspiration, index (index)}
      <a
        href={inspiration.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="inspiration">
          <img
            src={inspiration.avatar}
            alt={inspiration.name}
            class="avatar"
          />
          <span class="name">{inspiration.name}</span>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .inspirations {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
    margin-top: var(--spacing-4);
  }

  .inspiration {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);

    background: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-full);
    padding: var(--spacing-1) var(--spacing-1);
    padding-inline-end: var(--spacing-2_5);

    font-size: var(--text-xs);
    font-weight: var(--font-weight-medium);

    transition: all 0.2s ease;

    &:hover {
      background: var(--color-sea-blue);
    }
  }

  .avatar {
    width: 20px;
    height: 20px;
    border-radius: var(--radius-full);
    object-fit: cover;
  }

  .name {
    color: var(--color-neutral-800);
    white-space: nowrap;
    font-size: var(--text-xs);
  }

  .inspiration:hover .name {
    color: var(--color-white);
  }

  /* Mobile responsive */
  @media (max-width: 640px) {
    .inspirations {
      gap: var(--spacing-2);
    }

    .inspiration {
      padding-inline-end: var(--spacing-2);
    }
  }
</style>
