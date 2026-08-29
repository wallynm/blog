<script lang="ts">
	import CategoryPill from './CategoryPill.svelte';
	export let categories: string[] = [];
</script>

{#if categories?.length}
	<aside class="mt-12 border-t border-border pt-6 not-prose">
		<h2 class="mb-3 font-mono text-xs uppercase tracking-wider text-faint">Categorias</h2>
		<div class="flex flex-wrap gap-2">
			{#each categories as category}
				<CategoryPill href="/blog/category/{category}" name={category} />
			{/each}
		</div>
	</aside>
{/if}
