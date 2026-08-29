<script lang="ts">
	export let name: string;
	export let description = '';
	export let url = '';
	export let repo = '';
	export let tags: string[] = [];
	export let image = '';
	// Optional light-theme variant. When set, `image` is used in dark mode and
	// this one in light. Both tags are rendered and toggled with CSS, but the
	// hidden one is display:none and lazy, so the browser never fetches it —
	// only the active theme's file goes over the wire.
	export let imageLight = '';
	/** 1-based position, shown as the big 01 / 02 / 03 marker. */
	export let index = 1;

	// Rows alternate sides so the eye zigzags down the section.
	$: flipped = index % 2 === 0;

	let failed = false;
	$: showImage = image && !failed;
	$: primary = url || repo;

	// Shown in the mock address bar. Falls back to the project name when the
	// project has no public URL.
	$: host = url ? new URL(url).host.replace(/^www\./, '') : name.toLowerCase();

	// The frame tilts away from the text column and straightens on hover, so
	// each row leans toward its own copy.
	//
	// Written out in full, including the `lg:` prefix: Tailwind scans this file
	// as text, so a class assembled at runtime (`lg:{tilt}`) would never have
	// its rule generated.
	const TILT_LEFT = 'lg:[transform:rotateY(-6deg)_rotateX(1.5deg)]';
	const TILT_RIGHT = 'lg:[transform:rotateY(6deg)_rotateX(1.5deg)]';
	$: tilt = flipped ? TILT_RIGHT : TILT_LEFT;

	const shot =
		'h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]';
</script>

<article class="group grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
	<!-- Screenshot, in a mock browser frame -->
	<div class="relative [perspective:1600px] {flipped ? 'lg:order-2' : ''}">
		<!-- Glow sits behind the frame and lifts on hover. -->
		<div
			class="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-brand/10 opacity-0 blur-3xl sm:-inset-6
				transition-opacity duration-500 group-hover:opacity-100"
			aria-hidden="true"
		></div>

		<div
			class="relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl
				shadow-canvas/60 transition-[transform,border-color] duration-500 ease-out
				group-hover:border-brand/60 {tilt}
				lg:group-hover:[transform:rotateY(0deg)_rotateX(0deg)]
				motion-reduce:transition-none motion-reduce:lg:[transform:none]"
		>
			<!-- Title bar -->
			<div class="flex items-center gap-2 border-b border-border bg-canvas/60 px-3 py-2">
				<span class="flex gap-1.5" aria-hidden="true">
					<span class="h-2.5 w-2.5 rounded-full bg-brand/70"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-faint/40"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-faint/25"></span>
				</span>
				<span
					class="mx-auto max-w-[60%] truncate rounded-md bg-canvas px-2.5 py-0.5 font-mono
						text-[10px] text-faint"
					aria-hidden="true"
				>
					{host}
				</span>
			</div>

			<div class="relative aspect-[16/10] overflow-hidden">
			{#if showImage}
				{#if imageLight}
					<img
						src={imageLight}
						alt="Captura de tela do projeto {name}"
						loading="lazy"
						decoding="async"
						on:error={() => (failed = true)}
						class="{shot} dark:hidden"
					/>
					<img
						src={image}
						alt=""
						loading="lazy"
						decoding="async"
						on:error={() => (failed = true)}
						class="{shot} hidden dark:block"
					/>
				{:else}
					<img
						src={image}
						alt="Captura de tela do projeto {name}"
						loading="lazy"
						decoding="async"
						on:error={() => (failed = true)}
						class={shot}
					/>
				{/if}
			{:else}
				<!-- Placeholder until a screenshot exists. -->
				<div
					class="flex h-full w-full items-center justify-center bg-canvas"
					style="background-image:
						repeating-linear-gradient(45deg,
							rgb(var(--color-border) / 0.35) 0 1px,
							transparent 1px 10px);"
				>
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
						stroke-width="1.5" class="text-faint/60" aria-hidden="true">
						<rect x="3" y="4" width="18" height="16" rx="2" />
						<circle cx="8.5" cy="9.5" r="1.5" />
						<path d="m3 16 4.5-4.5a2 2 0 0 1 2.8 0L15 16" />
						<path d="m14 15 2-2a2 2 0 0 1 2.8 0L21 15" />
					</svg>
				</div>
			{/if}
			</div>
		</div>
	</div>

	<!-- Text -->
	<div class={flipped ? 'lg:order-1' : ''}>
		<div class="flex items-center gap-4">
			<span
				class="font-display text-6xl font-bold leading-none text-brand/45 sm:text-7xl"
				aria-hidden="true"
			>
				{String(index).padStart(2, '0')}
			</span>
			<span class="h-px flex-1 bg-gradient-to-r from-brand/50 to-transparent"></span>
		</div>

		<h3 class="mt-5 font-display text-3xl font-bold sm:text-4xl">
			{#if primary}
				<a
					href={primary}
					rel={primary.startsWith('http') ? 'external noopener' : undefined}
					class="no-underline transition-colors hover:text-accent"
				>
					{name}
				</a>
			{:else}
				{name}
			{/if}
		</h3>

		{#if description}
			<p class="mt-4 text-lg text-muted">{description}</p>
		{/if}

		{#if tags.length}
			<ul class="mt-6 flex flex-wrap gap-2">
				{#each tags as tag}
					<li
						class="rounded-full border border-border px-3 py-1 font-mono text-xs text-faint"
					>
						{tag}
					</li>
				{/each}
			</ul>
		{/if}

		{#if url || repo}
			<div class="mt-7 flex flex-wrap gap-3">
				{#if url}
					<a
						href={url}
						rel="external noopener"
						class="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-on-brand
							no-underline transition-opacity hover:opacity-90"
					>
						Ver o projeto ↗
					</a>
				{/if}
				{#if repo}
					<a
						href={repo}
						rel="external noopener"
						class="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted
							no-underline transition-colors hover:border-accent hover:text-accent"
					>
						Código ↗
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
