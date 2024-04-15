<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
    import LayoutContent from '$lib/components/layout/LayoutContent.svelte';

	export let data
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<LayoutContent>
	<PostsList posts={data.posts} />
	<Pagination currentPage={1} totalPosts={data.total} />
</LayoutContent>