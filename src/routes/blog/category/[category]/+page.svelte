<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data
</script>

<svelte:head>
	<title>Categoria: {data.category}</title>
</svelte:head>

<LayoutContent>
	<h1 class="mb-12">Categoria: {data.category}</h1>

	{#if data.posts.length}
		<PostsList posts={data.posts} />
		<Pagination
			currentPage={data.page}
			totalPosts={data.total}
			path="/blog/category/{data.category}/page"
		/>
	{:else}
		<p><strong>Ops!</strong> Nenhum post encontrado na categoria "{data.category}".</p>
		<p><a href="/blog">Voltar para o blog</a></p>
	{/if}
</LayoutContent>
