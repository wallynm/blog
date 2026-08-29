<script lang="ts">
	import { onMount } from 'svelte';

	// Mirrors whatever the inline script in app.html already applied, so the
	// button never contradicts the theme on screen.
	let isDark = true;

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	const toggle = () => {
		isDark = !isDark;
		const theme = isDark ? 'dark' : 'light';

		try {
			localStorage.setItem('theme', theme);
		} catch (e) {
			// Private mode: the toggle still applies for this page view.
		}

		window.changeThemeMode(theme);
	};
</script>

<button
	type="button"
	on:click={toggle}
	class="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted
		transition-colors hover:border-accent hover:text-accent"
	aria-pressed={isDark}
	title={isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
>
	<span class="sr-only">
		{isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
	</span>

	{#if isDark}
		<!-- Sun -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2" stroke-linecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</svg>
	{:else}
		<!-- Moon -->
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
		</svg>
	{/if}
</button>
