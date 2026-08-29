import { getCategories } from '$lib/assets/js/fetchPosts'

export const load = async () => {
	return {
		uniqueCategories: await getCategories()
	}
}
