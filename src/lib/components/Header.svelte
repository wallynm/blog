<script>
	import NavItems from './NavItems.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import MainNav from './MainNav.svelte';
	import ThemeSwitch from './header/ThemeSwitch.svelte';
	import { siteTitle } from '$lib/config';
</script>

<header
	class="sticky top-0 z-30 border-b border-border bg-canvas/85 backdrop-blur
		supports-[backdrop-filter]:bg-canvas/70"
>
	<div class="mx-auto flex h-16 max-w-wide items-center gap-4 px-5 sm:px-8">
		<a href="/" class="group flex items-baseline gap-1 no-underline">
			<span class="font-mono text-lg text-accent" aria-hidden="true">~/</span>
			<span class="text-lg font-bold text-text transition-colors group-hover:text-accent">
				{siteTitle}
			</span>
		</a>

		<nav class="ml-auto hidden sm:block" aria-label="Principal">
			<NavItems />
		</nav>

		<div class="ml-auto flex items-center gap-2 sm:ml-0">
			<ThemeSwitch />
			<HamburgerMenuButton />
		</div>
	</div>
</header>

<MainNav />
