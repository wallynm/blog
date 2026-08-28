<script>
	import { isMenuOpen } from '../assets/js/store';

	export let closeOnly = false;
</script>

<button
	type="button"
	on:click={() => isMenuOpen.set(!$isMenuOpen)}
	aria-expanded={$isMenuOpen}
	aria-controls="main-nav"
	tabindex={$isMenuOpen || !closeOnly ? 0 : -1}
	class="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted
		transition-colors hover:border-accent hover:text-accent sm:hidden"
>
	<span class="sr-only">{$isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>

	{#if closeOnly}
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<path d="M6 6l12 12M18 6L6 18" />
		</svg>
	{:else}
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<path d="M3 6h18M3 12h18M3 18h18" />
		</svg>
	{/if}
</button>
