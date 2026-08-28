<script>
	import { siteTitle } from '$lib/config';
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';

	export let data
</script>

<svelte:head>
	<title>Categorias — {siteTitle}</title>
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading title="Categorias" subtitle="Todos os assuntos do blog." />

		{#if data.uniqueCategories.length}
			<ul class="grid max-w-content gap-3 sm:grid-cols-2">
				{#each data.uniqueCategories as category}
					<li>
						<a
							href="/blog/category/{category.title}"
							class="flex items-center justify-between gap-4 rounded-xl border border-border
								bg-surface px-5 py-4 no-underline transition-colors hover:border-accent/60"
						>
							<span class="font-mono text-text">{category.title}</span>
							<span class="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
								{category.count}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-muted">Nenhuma categoria ainda.</p>
		{/if}
	</div>
</LayoutContent>
