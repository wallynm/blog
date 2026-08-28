<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';

	export let href;

	// '/' would otherwise prefix-match every route.
	$: isCurrentPage = href === '/' ? $currentPage === '/' : $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		on:click={maybeCloseMenu}
		aria-current={isCurrentPage ? 'page' : undefined}
		class="relative py-1 font-medium no-underline transition-colors hover:text-accent
			{isCurrentPage ? 'text-text' : 'text-muted'}"
	>
		<slot />
		{#if isCurrentPage}
			<span class="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand" aria-hidden="true"></span>
		{/if}
	</a>
</li>
