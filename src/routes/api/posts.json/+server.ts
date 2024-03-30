import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'

// export const prerender = true

export const GET = async ({ params, url }) => {
  const offset = url.searchParams.get('offset') || '';
  const category = url.searchParams.get('category') || '';
  const limit = url.searchParams.get('limit') || postsPerPage;

  const options = {
    limit,
    offset: offset,
    category: category || undefined
  }

  const { posts } = await fetchPosts(options)
  return json(posts)
}