<!-- Renders any page at /blog/category/* -->
<script>
	import { siteTitle } from '$lib/config';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data
</script>

<svelte:head>
	<title>Categoria: {data.category} — {siteTitle}</title>
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading
			eyebrow="Categoria"
			title={data.category}
			subtitle="{data.total} {data.total === 1 ? 'post' : 'posts'} nesta categoria."
		/>

		{#if data.posts.length}
			<PostsList posts={data.posts} />
			<Pagination
				currentPage={data.page}
				totalPosts={data.total}
				path="/blog/category/{data.category}/page"
			/>
		{:else}
			<p class="text-muted">Nenhum post encontrado nesta categoria.</p>
		{/if}

		<div class="mt-10">
			<a href="/blog/category" class="text-sm text-accent no-underline hover:underline">
				← Todas as categorias
			</a>
		</div>
	</div>
</LayoutContent>
