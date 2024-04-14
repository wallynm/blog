<script lang="ts">
	import { postsPerPage } from '$lib/config'

	export let currentPage:number;
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable:number;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	const isCurrentPage = (page) => page == currentPage
	

	const getClassnameNavigation = (page, type:'item'|'prev'|'next') => {
		let className = 'relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500'

		if(type == 'item' && isCurrentPage(page)) {
			className += ' bg-neutral-100 text-primary-700'
		}

		if(type == 'prev' && currentPage == 1) {
			className += ' pointer-events-none'
		}

		if(type == 'next' && currentPage == pagesAvailable) {
			className += ' pointer-events-none'
		}

		return className;
	}

	const getNextPageLink = () => {
		if(currentPage < pagesAvailable) {
			return `${path}/${currentPage + 1}`
		}
		return '#!'
	}

	const getPrevPageLink = () => {
		if(currentPage > 1) {
			return `${path}/${currentPage - 1}`
		}
		return '#!'
	}
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Page navigation example">
			<ul class="list-style-none flex">
				<li>
					<a
						href="{getPrevPageLink()}"
						class="{getClassnameNavigation(currentPage, 'prev')}"
						>Previous</a
					>
				</li>

				{#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
				<li aria-current="{isCurrentPage(page)}">
					<a
						href="{path}/{page}"
						class="{getClassnameNavigation(page, 'item')}"
						>
						{page}
						<span
						class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
						>
						{#if isCurrentPage(page)}
							Current page: 
						{:else}
							Go to page 
						{/if}
						</span>
						</a
					>
				</li>
				{/each}
				<li>
					<a class="{getClassnameNavigation(currentPage, 'next')}" href="{getNextPageLink()}">
						Next
					</a>
				</li>
			</ul>
		</nav>
	{/if}
{/key}