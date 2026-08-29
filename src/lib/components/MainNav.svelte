<script>
	import { isMenuOpen } from '../assets/js/store';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import NavItems from './NavItems.svelte';
	import { siteTitle } from '$lib/config';
</script>

<!-- Mobile overlay nav. The desktop nav lives inline in the header. -->
<div
	id="main-nav"
	class="fixed inset-0 z-40 flex flex-col bg-canvas transition-opacity duration-200 sm:hidden
		{$isMenuOpen ? 'opacity-100' : 'pointer-events-none invisible opacity-0'}"
	aria-hidden={!$isMenuOpen}
>
	<div class="flex h-16 items-center justify-between px-5">
		<span class="flex items-baseline gap-1">
			<span class="font-mono text-lg text-accent" aria-hidden="true">~/</span>
			<span class="text-lg font-bold text-text">{siteTitle}</span>
		</span>
		<HamburgerMenuButton closeOnly={true} />
	</div>

	<nav class="flex flex-1 items-center justify-center pb-24" aria-label="Menu principal">
		<NavItems class="flex flex-col items-center gap-8 text-2xl" />
	</nav>
</div>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') isMenuOpen.set(false);
	}}
/>
