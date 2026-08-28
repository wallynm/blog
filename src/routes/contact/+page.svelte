<script>
	import { siteTitle } from '$lib/config';
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
</script>

<svelte:head>
	<title>Contato — {siteTitle}</title>
</svelte:head>

<LayoutContent>
	<div class="py-12 sm:py-16">
		<PageHeading title="Contato" subtitle="Quer trocar uma ideia? É por aqui." />

		<ul class="grid max-w-content gap-3 sm:grid-cols-2">
			<li>
				<a
					rel="external"
					href="https://github.com/wallynm"
					class="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4
						no-underline transition-colors hover:border-accent/60"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 text-muted" aria-hidden="true">
						<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
					</svg>
					<span>
						<span class="block font-semibold text-text">GitHub</span>
						<span class="block text-sm text-faint">@wallynm</span>
					</span>
				</a>
			</li>
			<li>
				<a
					href="/api/rss.xml"
					data-sveltekit-reload
					class="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4
						no-underline transition-colors hover:border-accent/60"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 text-muted" aria-hidden="true">
						<circle cx="5" cy="19" r="2.5" />
						<path d="M3 10.5a10.5 10.5 0 0 1 10.5 10.5H17A13.5 13.5 0 0 0 3 7.5Z" />
						<path d="M3 3.5A17.5 17.5 0 0 1 20.5 21H24A21 21 0 0 0 3 0Z" />
					</svg>
					<span>
						<span class="block font-semibold text-text">RSS</span>
						<span class="block text-sm text-faint">Acompanhe os posts</span>
					</span>
				</a>
			</li>
		</ul>
	</div>
</LayoutContent>
