import { fetchApiPosts, fetchApiPostsCount } from '$lib/modules/server';


export const load = async ({ url, fetch }) => {
	const posts = await fetchApiPosts({ url, fetch });
	const total = await fetchApiPostsCount({ url, fetch });

	return { posts, total }
}
