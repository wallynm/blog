import { fetchApiPosts, fetchApiPostsCount } from '$lib/modules/server';
import type { PageServerLoad } from './$types';


export const load:PageServerLoad = async ({ url, fetch }) => {
	const posts = await fetchApiPosts({ url, fetch });
	const total = await fetchApiPostsCount({ url, fetch });

	return { posts, total }
}
