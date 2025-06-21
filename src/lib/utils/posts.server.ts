const posts = import.meta.glob<Post>('../../content/**/*.md', {
  eager: true,
  import: 'metadata'
})

export interface Post {
  title: string
  description: string
  category: string
  tags: string[]
  publishAt: string
  updatedAt: string
  slug: string
}

export function getPosts(): Post[] {
  const postList = Object.entries(posts).map(([path, content]) => {
    const slug = path.replace('../../content/', '').replace(/\.md$/, '')

    return {
      ...content,
      slug
    }
  })

  postList.sort(
    (a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime()
  )

  return postList
}
