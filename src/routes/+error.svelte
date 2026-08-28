<script>
	import { siteTitle } from '$lib/config';
	import { page } from '$app/stores'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	const messages = {
		404: 'Esta página não existe — ou existiu e mudou de endereço.'
	}
</script>

<svelte:head>
	<title>{$page.status} — {siteTitle}</title>
</svelte:head>

<LayoutContent>
	<div class="py-24 text-center sm:py-32">
		<p class="font-mono text-6xl font-bold text-accent">{$page.status}</p>

		<h1 class="mt-6 text-2xl">
			{messages[$page.status] || $page.error?.message || 'Algo deu errado.'}
		</h1>

		<div class="mt-10 flex flex-wrap justify-center gap-3">
			<a
				href="/"
				class="rounded-lg bg-accent px-4 py-2 font-semibold text-canvas no-underline
					transition-opacity hover:opacity-90"
			>
				Ir para a home
			</a>
			<a
				href="/blog"
				class="rounded-lg border border-border px-4 py-2 font-semibold text-muted no-underline
					transition-colors hover:border-accent hover:text-accent"
			>
				Ver o blog
			</a>
		</div>
	</div>
</LayoutContent>
