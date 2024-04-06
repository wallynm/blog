<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header class="{$$restProps.class || ''}">
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/" class="text-4xl color-slate-900">
		{siteTitle}
	</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>