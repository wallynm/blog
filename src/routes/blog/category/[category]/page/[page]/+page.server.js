import { error, redirect } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts, { getCategories } from '$lib/assets/js/fetchPosts'

export const entries = async () => {
	const categories = await getCategories()

	return categories.flatMap(({ title, count }) => {
		const pages = Math.ceil(count / postsPerPage)

		return Array.from({ length: Math.max(pages - 1, 0) }, (_, i) => ({
			category: title,
			page: String(i + 2)
		}))
	})
}

export const load = async ({ params }) => {
	const page = parseInt(params.page)
	const { category } = params

	// Prevents duplication of page 1 as the index page
	if (!page || page <= 1) {
		redirect(301, `/blog/category/${category}`);
	}

	const offset = (page - 1) * postsPerPage
	const { posts, total } = await fetchPosts({ category, offset })

	if (!posts.length) {
		error(404, `Page ${page} of the category "${category}" doesn't exist.`)
	}

	return {
		posts,
		page,
		category,
		totalPosts: total
	}
}
