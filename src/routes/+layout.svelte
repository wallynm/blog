<!-- Global layout: parent component to every page on the site. -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import mixpanel from 'mixpanel-browser';
	import { navItems, siteDescription } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const transitionIn = { delay: 100, duration: 150 };
	const transitionOut = { duration: 100 };

	/** Used to highlight the current page in the nav. */
	$: currentPage.set(data.path);

	// Keeps the page behind the mobile overlay from scrolling under it.
	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = $isMenuOpen ? 'hidden' : '';
	}

	onMount(() => {
		mixpanel.init('282d4cca7905578d99de00196ed79943', {
			debug: false,
			track_pageview: true,
			persistence: 'localStorage'
		});

		// Pre-fetches top-level routes in the background for faster navigation.
		preloadCode(...navItems.map((item) => item.route));
	});
</script>

<svelte:head>
	<meta name="description" content={siteDescription} />
</svelte:head>

<a href="#main" class="skip-link">Pular para o conteúdo</a>

<div class="flex min-h-screen flex-col">
	<Header />

	{#key data.path}
		<main
			id="main"
			class="flex-1 focus:outline-none"
			tabindex="-1"
			in:fade|global={transitionIn}
			out:fade|global={transitionOut}
		>
			<slot />
		</main>
	{/key}

	<Footer />
</div>
