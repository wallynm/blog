<script lang="ts">
	import { siteTitle, siteDescription, siteAuthor } from '$lib/config'
	import { projects } from '$lib/projects'
	import PostsList from '$lib/components/PostsList.svelte'
	import ProjectRow from '$lib/components/ProjectRow.svelte'
	import Resume from '$lib/components/Resume.svelte'
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte'

	export let data

	const featured = projects.slice(0, 3)
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

	{#if featured.length}
		<section class="border-b border-border py-16 sm:py-24">
			<div class="mb-14 flex items-end justify-between gap-6">
				<div>
					<p class="font-mono text-xs uppercase tracking-[0.2em] text-accent">
						{featured.length} projetos
					</p>
					<h2 class="mt-3 text-3xl sm:text-4xl">No que tenho trabalhado</h2>
				</div>
			</div>

			<ul class="flex flex-col gap-20 sm:gap-28">
				{#each featured as project, i}
					<li>
						<ProjectRow {...project} index={i + 1} />
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<section class="py-12 sm:py-16">
		{#if data.posts?.length}
			<div class="mb-6 flex items-baseline justify-between gap-4">
				<h2 class="text-2xl">Últimos posts</h2>
				<a href="/blog" class="whitespace-nowrap text-sm text-accent no-underline hover:underline">
					Ver todos →
				</a>
			</div>

			<PostsList posts={data.posts} />
		{:else}
			<h2 class="text-2xl">Ainda não há posts por aqui</h2>
			<p class="mt-2 text-muted">Volte em breve.</p>
		{/if}
	</section>
</LayoutContent>

<Resume />
