<script>
	import { siteAuthor, siteTitle, navItems } from '$lib/config';
</script>

<footer class="mt-24 border-t border-border">
	<div
		class="mx-auto flex max-w-wide flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center
			sm:justify-between sm:px-8"
	>
		<div>
			<a href="/" class="flex items-baseline gap-1 no-underline">
				<span class="font-mono text-sm text-accent" aria-hidden="true">~/</span>
				<span class="text-sm font-bold text-text">{siteTitle}</span>
			</a>
			<p class="mt-1 text-sm text-faint">
				&copy; {new Date().getFullYear()} {siteAuthor}
			</p>
		</div>

		<nav aria-label="Rodapé">
			<ul class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
				{#each navItems as item}
					<li>
						<a href={item.route} class="text-muted no-underline hover:text-accent">
							{item.title}
						</a>
					</li>
				{/each}
				<li>
					<a
						href="/api/rss.xml"
						data-sveltekit-reload
						class="inline-flex items-center gap-1.5 text-muted no-underline hover:text-accent"
					>
						<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<circle cx="5" cy="19" r="2.5" />
							<path d="M3 10.5a10.5 10.5 0 0 1 10.5 10.5H17A13.5 13.5 0 0 0 3 7.5Z" />
							<path d="M3 3.5A17.5 17.5 0 0 1 20.5 21H24A21 21 0 0 0 3 0Z" />
						</svg>
						RSS
					</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
