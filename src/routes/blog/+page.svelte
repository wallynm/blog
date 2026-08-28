<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'
	import { siteTitle, siteDescription } from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>Blog — {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading
			title="Blog"
			subtitle="{data.total} {data.total === 1 ? 'post publicado' : 'posts publicados'}."
		/>

		<PostsList posts={data.posts} />
		<Pagination currentPage={1} totalPosts={data.total} />
	</div>
</LayoutContent>
