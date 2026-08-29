<script lang="ts">
	import PostDate from './PostDate.svelte';
	import CategoryPill from './categories/CategoryPill.svelte';

	export let post;
</script>

<article
	class="group relative overflow-hidden rounded-2xl border border-border bg-surface
		transition-colors hover:border-brand/60 sm:flex"
>
	{#if post.coverImage}
		<img
			src={post.coverImage}
			alt=""
			decoding="async"
			class="h-48 w-full object-cover sm:h-auto sm:w-2/5 sm:shrink-0"
		/>
	{/if}

	<div class="p-6 sm:p-8">
		{#if post.categories?.length}
			<p class="font-mono text-xs uppercase tracking-[0.2em] text-accent">
				{post.categories[0]}
			</p>
		{/if}

		<h3 class="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
			<!-- Stretched so the whole card is the click target. -->
			<a href="/blog/{post.slug}" class="no-underline after:absolute after:inset-0">
				<span class="transition-colors group-hover:text-accent">{post.title}</span>
			</a>
		</h3>

		<PostDate date={post.date} class="mt-3 block font-mono text-xs text-faint" />

		{#if post.excerpt}
			<p class="mt-4 text-muted">{post.excerpt}</p>
		{/if}

		{#if post.categories?.length}
			<!-- Above the stretched link so the pills stay clickable. -->
			<div class="relative z-10 mt-5 flex flex-wrap gap-1.5">
				{#each post.categories as category}
					<CategoryPill name={category} href="/blog/category/{category}" />
				{/each}
			</div>
		{/if}
	</div>
</article>
