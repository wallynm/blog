import { error } from '@sveltejs/kit'
import { getAllPosts } from '$lib/assets/js/fetchPosts'

export const entries = async () => {
	const posts = await getAllPosts()
	return posts.map(({ slug }) => ({ post: slug }))
}

export const load = async ({ params }) => {
	try {	
		const post = await import(`../../../lib/posts/${params.post}.md`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		error(404, `Post "${params.post}" not found.`);
	}
}
