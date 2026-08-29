<!-- Renders a single blog post. -->
<script lang="ts">
	import CategoriesPostList from '$lib/components/categories/CategoriesPostList.svelte';
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import { siteTitle, siteLink } from '$lib/config';

	export let data;

	$: ({ title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta);
	$: ({ PostContent } = data);

	$: absoluteCover = coverImage ? new URL(coverImage, siteLink).href : '';
</script>

<svelte:head>
	<title>{title} — {siteTitle}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	{#if absoluteCover}
		<meta property="og:image" content={absoluteCover} />
		<meta property="og:image:width" content={coverWidth} />
		<meta property="og:image:height" content={coverHeight} />
		<meta name="twitter:image" content={absoluteCover} />
	{/if}
</svelte:head>

<article>
	<header class="border-b border-border">
		<LayoutContent>
			<div class="py-12 sm:py-16">
				{#if categories?.length}
					<p class="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
						{categories[0]}
					</p>
				{/if}

				<h1 class="max-w-content text-3xl sm:text-4xl md:text-5xl">{title}</h1>

				{#if excerpt}
					<p class="mt-5 max-w-content text-lg text-muted">{excerpt}</p>
				{/if}

				<div class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-faint">
					<PostDate date={date} prefix="Publicado em " />
					{#if updated && updated !== date}
						<span aria-hidden="true">·</span>
						<PostDate date={updated} prefix="atualizado em " />
					{/if}
				</div>
			</div>
		</LayoutContent>
	</header>

	{#if coverImage}
		<LayoutContent>
			<img
				src={coverImage}
				alt=""
				width={coverWidth}
				height={coverHeight}
				class="mt-10 aspect-[16/7] w-full rounded-xl object-cover"
			/>
		</LayoutContent>
	{/if}

	<LayoutContent>
		<div class="prose prose-lg max-w-content py-12 sm:py-16">
			<svelte:component this={PostContent} />
			<CategoriesPostList {categories} />
		</div>

		<div class="pb-12">
			<a href="/blog" class="text-sm text-accent no-underline hover:underline">
				← Voltar para o blog
			</a>
		</div>
	</LayoutContent>
</article>
