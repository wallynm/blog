<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Blog - página {data.page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	<PostsList posts={data.posts} />
	<Pagination currentPage={data.page} totalPosts={data.totalPosts} />
</LayoutContent>
