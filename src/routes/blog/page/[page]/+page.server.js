import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'
import { redirect } from '@sveltejs/kit'
import { fetchApiPosts, fetchApiPostsCount } from '$lib/modules/server';


export const load = async ({ url, params, fetch }) => {
  const page = parseInt(params.page) || 1

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    redirect(301, '/blog');
  }
  
  let offset = (page * postsPerPage) - postsPerPage
  
  const posts = await fetchApiPosts({ url, fetch });
	const total = await fetchApiPostsCount({ url, fetch, offset, page });

  return {
    posts,
    page,
    totalPosts: total
  }
}
