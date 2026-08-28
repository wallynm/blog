import fetchPosts from '$lib/assets/js/fetchPosts';

export const load = async () => {
	const { posts, total } = await fetchPosts();

	return { posts, total }
}
