import { redirect } from '@sveltejs/kit';
import { getCategories } from '$lib/assets/js/fetchPosts'

export const entries = async () => {
	const categories = await getCategories()
	return categories.map(({ title }) => ({ category: title }))
}

export const load = async ({ params }) => {
	redirect(301, `/blog/category/${params.category}`);
}
