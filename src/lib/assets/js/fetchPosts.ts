import { postsPerPage } from '$lib/config'

interface fetchPostsInterface {
	offset?: string | number
	limit?: string | number
	category?: string
}

/**
 * Reads every Markdown file in src/lib/posts and returns them newest-first.
 * The glob is resolved at build time, so this works during prerendering
 * without any server or network round-trip.
 **/
export const getAllPosts = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Every category used by at least one post, alphabetically, with its post count.
 **/
export const getCategories = async () => {
	const posts = await getAllPosts()
	const categories = {}

	posts.forEach((post) => {
		;(post.categories || []).forEach((category) => {
			if (categories[category]) {
				categories[category].count += 1
			} else {
				categories[category] = { title: category, count: 1 }
			}
		})
	})

	return Object.values(categories).sort((a, b) => a.title.localeCompare(b.title))
}

/**
 * Returns a page of posts plus `total`, the number of posts matching the
 * filter *before* pagination. `total` is what the pagination component needs
 * to work out how many pages exist, so it must ignore offset/limit.
 **/
const fetchPosts = async ({
	offset = 0,
	limit = postsPerPage,
	category = ''
}: fetchPostsInterface = {}) => {
	let posts = await getAllPosts()

	if (category) {
		posts = posts.filter((post) => (post.categories || []).includes(category))
	}

	const total = posts.length

	if (offset) {
		posts = posts.slice(Number(offset))
	}

	if (limit && Number(limit) > 0) {
		posts = posts.slice(0, Number(limit))
	}

	return {
		posts: posts.map((post) => ({
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			coverImage: post.coverImage,
			coverWidth: post.coverWidth,
			coverHeight: post.coverHeight,
			date: post.date,
			categories: post.categories
		})),
		total
	}
}

export default fetchPosts
