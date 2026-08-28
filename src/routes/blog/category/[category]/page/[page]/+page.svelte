<!-- Renders posts listed by category, page 2 onwards -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'
	import { siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Categoria: {data.category} - página {data.page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	<h1 class="mb-12">Categoria: {data.category}</h1>

	<PostsList posts={data.posts} />
	<Pagination
		currentPage={data.page}
		totalPosts={data.totalPosts}
		path="/blog/category/{data.category}/page"
	/>
</LayoutContent>
