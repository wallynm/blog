<script lang="ts">
	import { postsPerPage } from '$lib/config'

	export let currentPage: number
	export let totalPosts: number
	export let path = '/blog/page'

	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	// Page 1 lives at the index route, not at /page/1.
	const linkFor = (page: number) => (page === 1 ? path.replace(/\/page$/, '') : `${path}/${page}`)

	const baseLink =
		'inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm ' +
		'no-underline transition-colors'
</script>

{#if pagesAvailable > 1}
	<nav class="mt-10 flex max-w-content justify-center" aria-label="Paginação">
		<ul class="flex flex-wrap items-center gap-2">
			<li>
				{#if currentPage > 1}
					<a href={linkFor(currentPage - 1)} class="{baseLink} border-border text-muted hover:border-accent hover:text-accent" rel="prev">
						Anterior
					</a>
				{:else}
					<span class="{baseLink} border-transparent text-faint opacity-50" aria-hidden="true">Anterior</span>
				{/if}
			</li>

			{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
				<li>
					{#if page === currentPage}
						<span class="{baseLink} border-brand bg-brand font-semibold text-on-brand" aria-current="page">
							<span class="sr-only">Página atual, </span>{page}
						</span>
					{:else}
						<a href={linkFor(page)} class="{baseLink} border-border text-muted hover:border-accent hover:text-accent">
							<span class="sr-only">Ir para a página </span>{page}
						</a>
					{/if}
				</li>
			{/each}

			<li>
				{#if currentPage < pagesAvailable}
					<a href={linkFor(currentPage + 1)} class="{baseLink} border-border text-muted hover:border-accent hover:text-accent" rel="next">
						Próxima
					</a>
				{:else}
					<span class="{baseLink} border-transparent text-faint opacity-50" aria-hidden="true">Próxima</span>
				{/if}
			</li>
		</ul>
	</nav>
{/if}
