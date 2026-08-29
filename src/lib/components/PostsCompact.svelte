<script lang="ts">
	import PostDate from './PostDate.svelte';

	export let posts = [];
</script>

<!-- Tight list for secondary posts: date and title only, separated by rules. -->
<ul class="divide-y divide-border border-t border-border">
	{#each posts as post}
		<li>
			<a
				href="/blog/{post.slug}"
				class="group flex flex-col gap-1 py-4 no-underline sm:flex-row sm:items-baseline sm:gap-5"
			>
				<PostDate
					date={post.date}
					class="shrink-0 whitespace-nowrap font-mono text-xs text-faint sm:w-40"
				/>
				<span class="font-medium text-text transition-colors group-hover:text-accent">
					{post.title}
				</span>
			</a>
		</li>
	{/each}
</ul>
