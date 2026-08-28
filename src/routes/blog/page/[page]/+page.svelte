<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'
	import { siteTitle, siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Blog, página {data.page} — {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading title="Blog" subtitle="Página {data.page}" />

		<PostsList posts={data.posts} />
		<Pagination currentPage={data.page} totalPosts={data.totalPosts} />
	</div>
</LayoutContent>
