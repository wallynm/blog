<script lang="ts">
	export let name: string;
	export let description = '';
	export let url = '';
	export let repo = '';
	export let tags: string[] = [];
	export let image = '';

	// A path that 404s would otherwise show a broken-image icon; fall back to
	// the placeholder instead.
	let failed = false;
	$: showImage = image && !failed;

	// The card links to the site when there is one, otherwise to the repo.
	$: primary = url || repo;
</script>

<article
	class="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border
		bg-surface transition-colors hover:border-brand/60"
>
	<div class="relative aspect-[16/9] overflow-hidden border-b border-border">
		{#if showImage}
			<img
				src={image}
				alt="Captura de tela do projeto {name}"
				loading="lazy"
				decoding="async"
				on:error={() => (failed = true)}
				class="h-full w-full object-cover object-top transition-transform duration-300
					group-hover:scale-[1.02]"
			/>
		{:else}
			<!-- Placeholder until a screenshot is added. Deliberately reads as an
			     empty slot rather than imitating a screenshot. -->
			<div
				class="flex h-full w-full items-center justify-center bg-canvas"
				style="background-image:
					repeating-linear-gradient(45deg,
						rgb(var(--color-border) / 0.35) 0 1px,
						transparent 1px 10px);"
			>
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
					stroke-width="1.5" class="text-faint/60" aria-hidden="true">
					<rect x="3" y="4" width="18" height="16" rx="2" />
					<circle cx="8.5" cy="9.5" r="1.5" />
					<path d="m3 16 4.5-4.5a2 2 0 0 1 2.8 0L15 16" />
					<path d="m14 15 2-2a2 2 0 0 1 2.8 0L21 15" />
				</svg>
			</div>
		{/if}
	</div>

	<div class="flex flex-1 flex-col p-5">
		<h3 class="font-display text-lg font-bold">
			{#if primary}
				<a
					href={primary}
					rel={primary.startsWith('http') ? 'external noopener' : undefined}
					class="no-underline after:absolute after:inset-0"
				>
					<span class="transition-colors group-hover:text-accent">{name}</span>
				</a>
			{:else}
				{name}
			{/if}
		</h3>

		{#if description}
			<p class="mt-2 text-sm text-muted">{description}</p>
		{/if}

		{#if tags.length}
			<ul class="mt-4 flex flex-wrap gap-1.5">
				{#each tags as tag}
					<li
						class="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-faint"
					>
						{tag}
					</li>
				{/each}
			</ul>
		{/if}

		{#if url && repo}
			<!-- Above the stretched link so both stay clickable. -->
			<div class="relative z-10 mt-auto flex gap-4 pt-4 font-mono text-xs">
				<a href={url} rel="external noopener" class="text-accent no-underline hover:underline">
					site ↗
				</a>
				<a href={repo} rel="external noopener" class="text-accent no-underline hover:underline">
					código ↗
				</a>
			</div>
		{/if}
	</div>
</article>
