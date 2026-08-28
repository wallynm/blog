<!-- Renders posts listed by category, page 2 onwards -->
<script>
	import { siteTitle } from '$lib/config';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data
</script>

<svelte:head>
	<title>Categoria: {data.category}, página {data.page} — {siteTitle}</title>
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading eyebrow="Categoria" title={data.category} subtitle="Página {data.page}" />

		<PostsList posts={data.posts} />
		<Pagination
			currentPage={data.page}
			totalPosts={data.totalPosts}
			path="/blog/category/{data.category}/page"
		/>
	</div>
</LayoutContent>
