<script lang="ts">
	import { siteTitle } from '$lib/config';

	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>


<div>{data}</div>
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <svelte:component this={data.ReadMe} /> -->

<!-- {#if posts?.length === 0}
	<h1>Posts {lowerBound}–{upperBound} of {total}</h1>
	<Pagination currentPage={page} {total} />

	<PostsList {posts} />

	<Pagination currentPage={page} {total} />
{/if} -->


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if data.posts?.length}
	<!-- <h1>Posts {total}–{upperBound} of {total}</h1> -->
	<!-- <Pagination currentPage={page} {total} /> -->

	<PostsList posts={data.posts} />

	<!-- <Pagination currentPage={page} {total} /> -->
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
