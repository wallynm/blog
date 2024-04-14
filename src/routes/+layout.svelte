<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import mixpanel from 'mixpanel-browser';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
	import { siteTitle, siteURL } from '$lib/config.js';
	import "../app.css";
	import type { LayoutData } from './$types';

	export let data: LayoutData;


	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		mixpanel.init('282d4cca7905578d99de00196ed79943', {debug: true, track_pageview: true, persistence: 'localStorage'});
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<svelte:head>
</svelte:head>

<div class="layout" class:open={$isMenuOpen}>
	<Header class="container px-5 py-12 mx-auto"/>
	<section class="container px-5 py-12 mx-auto">
		{#key data.path}
			<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
				<slot class="test"/>
			</main>
		{/key}
	</section>
	<Footer class="p-10"/>
</div>
