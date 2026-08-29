import { error } from '@sveltejs/kit'
import fetchPosts, { getCategories } from '$lib/assets/js/fetchPosts'

export const entries = async () => {
	const categories = await getCategories()
	return categories.map(({ title }) => ({ category: title }))
}

export const load = async ({ params }) => {
	const { category } = params
	const { posts, total } = await fetchPosts({ category })

	if (!total) {
		error(404, `No posts found in the category "${category}".`)
	}

	return {
		posts,
		category,
		page: 1,
		total
	}
}
