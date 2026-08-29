<script>
	import PostDate from './PostDate.svelte';
	import CategoryPill from './categories/CategoryPill.svelte';

	export let posts = [];
</script>

<ul class="flex max-w-content flex-col gap-4">
	{#each posts as post}
		<li>
			<article
				class="group relative flex gap-5 rounded-xl border border-border bg-surface p-5
					transition-colors hover:border-accent/60"
			>
				{#if post.coverImage}
					<img
						src={post.coverImage}
						alt=""
						loading="lazy"
						decoding="async"
						class="hidden h-24 w-32 shrink-0 rounded-lg object-cover sm:block"
					/>
				{/if}

				<div class="min-w-0 flex-1">
					<h2 class="text-xl font-bold leading-snug">
						<!-- Stretched so the whole card is the click target, while the
						     accessible name stays on the real link. -->
						<a href="/blog/{post.slug}" class="no-underline after:absolute after:inset-0">
							<span class="transition-colors group-hover:text-accent">{post.title}</span>
						</a>
					</h2>

					<PostDate date={post.date} class="mt-1.5 block font-mono text-xs text-faint" />

					{#if post.excerpt}
						<p class="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
					{/if}

					{#if post.categories?.length}
						<!-- Above the stretched link so the pills stay clickable. -->
						<div class="relative z-10 mt-3 flex flex-wrap gap-1.5">
							{#each post.categories as category}
								<CategoryPill name={category} href="/blog/category/{category}" />
							{/each}
						</div>
					{/if}
				</div>
			</article>
		</li>
	{/each}
</ul>
