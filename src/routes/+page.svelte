<script lang="ts">
	import { siteTitle, siteDescription } from '$lib/config'
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	{#if data.posts?.length}
		<PostsList posts={data.posts} />
		<Pagination currentPage={1} totalPosts={data.total} />
	{:else}
		<h1>Ops!</h1>

		<p>Nenhum post por aqui ainda.</p>

		<a href="/blog">Ir para o blog</a>
	{/if}
</LayoutContent>
