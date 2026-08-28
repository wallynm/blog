import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const entries = async () => {
  const { total } = await fetchPosts({ limit: -1 })
  const pages = Math.max(Math.ceil(total / postsPerPage), 1)

  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }))
}

export const GET = async ({ params }) => {
  const page = parseInt(params.page) || 1

  const { posts } = await fetchPosts({
    offset: (page - 1) * postsPerPage,
    limit: postsPerPage
  })

  return json(posts)
}
