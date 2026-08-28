import { error, redirect } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

// Tells the prerenderer which /blog/page/x routes actually exist.
export const entries = async () => {
  const { total } = await fetchPosts({ limit: -1 })
  const pages = Math.ceil(total / postsPerPage)

  return Array.from({ length: Math.max(pages - 1, 0) }, (_, i) => ({ page: String(i + 2) }))
}

export const load = async ({ params }) => {
  const page = parseInt(params.page)

  // Keeps from duplicating the blog index route as page 1
  if (!page || page <= 1) {
    redirect(301, '/blog');
  }

  const offset = (page - 1) * postsPerPage
  const { posts, total } = await fetchPosts({ offset })

  if (!posts.length) {
    error(404, `Page ${page} doesn't exist.`)
  }

  return {
    posts,
    page,
    totalPosts: total
  }
}
