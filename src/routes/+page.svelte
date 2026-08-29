<script lang="ts">
	import { siteTitle, siteDescription, siteAuthor } from '$lib/config'
	import { projects } from '$lib/projects'
	import FeaturedPost from '$lib/components/FeaturedPost.svelte'
	import PostsCompact from '$lib/components/PostsCompact.svelte'
	import ProjectRow from '$lib/components/ProjectRow.svelte'
	import Resume from '$lib/components/Resume.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data

	const featuredProjects = projects.slice(0, 3)

	// The newest post gets the large treatment; the next three sit under it in
	// the compact list.
	$: latestPost = data.posts?.[0]
	$: olderPosts = data.posts?.slice(1, 4) ?? []
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<LayoutContent>
	<section class="border-b border-border py-16 sm:py-20">
		<p class="font-mono text-sm text-accent">olá, eu sou</p>
		<h1 class="mt-3 text-4xl sm:text-5xl">{siteAuthor}</h1>
		<p class="mt-5 max-w-content text-lg text-muted">
			Desenvolvedor de software. Escrevo sobre desenvolvimento web, arquitetura,
			frontend e o que aprendo no caminho.
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/blog"
				class="rounded-lg bg-brand px-4 py-2 font-semibold text-on-brand no-underline
					transition-opacity hover:opacity-90"
			>
				Ler o blog
			</a>
			<a
				href="/about"
				class="rounded-lg border border-border px-4 py-2 font-semibold text-muted no-underline
					transition-colors hover:border-accent hover:text-accent"
			>
				Sobre mim
			</a>
		</div>
	</section>

	<section class="border-b border-border py-16 sm:py-20">
		{#if latestPost}
			<div class="mb-8 flex items-baseline justify-between gap-4">
				<h2 class="text-3xl sm:text-4xl">Último post</h2>
				<a href="/blog" class="whitespace-nowrap text-sm text-accent no-underline hover:underline">
					Ver todos →
				</a>
			</div>

			<FeaturedPost post={latestPost} />

			{#if olderPosts.length}
				<div class="mt-10">
					<PostsCompact posts={olderPosts} />
				</div>
			{/if}
		{:else}
			<h2 class="text-3xl sm:text-4xl">Ainda não há posts por aqui</h2>
			<p class="mt-3 text-muted">Volte em breve.</p>
		{/if}
	</section>

	{#if featuredProjects.length}
		<section class="border-b border-border py-16 sm:py-24">
			<div class="mb-14">
				<h2 class="text-3xl sm:text-4xl">Projetos pessoais</h2>
			</div>

			<ul class="flex flex-col gap-20 sm:gap-28">
				{#each featuredProjects as project, i}
					<li>
						<ProjectRow {...project} index={i + 1} />
					</li>
				{/each}
			</ul>
		</section>
	{/if}

</LayoutContent>

<Resume />
