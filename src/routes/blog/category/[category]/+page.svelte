<!-- Renders any page at /blog/category/* -->
<script>
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'

	export let data

  const { page, posts, category, total } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, total)
</script>


<svelte:head>
	<title>Categoria: {category}</title>
</svelte:head>


<LayoutContent>
	<h1 class="mb-12">Categoria: {category}</h1>
	
	{#if posts.length}
		<PostsList posts={posts} />
		<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
	{:else}
		<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>
		<p><a href="/blog">Back to blog</a></p>
	{/if}
</LayoutContent>