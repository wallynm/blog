<script lang="ts">
	import { resume } from '$lib/resume';
	import { siteAuthor } from '$lib/config';

	// Nothing to show until there is at least one role.
	$: hasContent = resume.experience?.length > 0;
</script>

{#if hasContent}
	<!--
		Full-bleed band. It sits outside the page container in +page.svelte, so
		the background spans the viewport while the content keeps the same left
		edge as the rest of the site.
	-->
	<section class="relative overflow-hidden border-y border-border bg-surface">
		<!-- Diagonal hatch, same texture language as the project placeholders. -->
		<div
			class="pointer-events-none absolute inset-0 opacity-[0.35]"
			style="background-image:
				repeating-linear-gradient(45deg,
					rgb(var(--color-border) / 0.5) 0 1px,
					transparent 1px 12px);"
			aria-hidden="true"
		></div>

		<!-- Oversized ghost word behind the heading. -->
		<span
			class="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[18vw]
				font-bold leading-none text-border/25 sm:-right-8 sm:-top-12"
			aria-hidden="true"
		>
			CV
		</span>

		<div class="relative mx-auto max-w-wide px-5 py-16 sm:px-8 sm:py-24">
			<header class="mb-12">
				<p class="font-mono text-xs uppercase tracking-[0.2em] text-accent">Currículo</p>
				<h2 class="mt-3 text-3xl sm:text-4xl">{siteAuthor}</h2>
				{#if resume.headline}
					<p class="mt-2 font-mono text-sm text-faint">{resume.headline}</p>
				{/if}
				{#if resume.summary}
					<p class="mt-5 max-w-content text-lg text-muted">{resume.summary}</p>
				{/if}
			</header>

			<div class="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
				<div>
					<h3 class="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
						Experiência
					</h3>

					<!-- Timeline: the border on the <ol> is the rail, each marker sits on it. -->
					<ol class="relative border-l border-border">
						{#each resume.experience as job}
							<li class="relative pb-10 pl-6 last:pb-0 sm:pl-8">
								<span
									class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand
										ring-4 ring-surface"
									aria-hidden="true"
								></span>

								<p class="font-mono text-xs text-faint">
									{job.location ? `${job.period} · ${job.location}` : job.period}
								</p>

								<h4 class="mt-1 font-display text-lg font-bold text-text">{job.role}</h4>

								{#if job.company}
									<p class="text-sm text-accent">{job.company}</p>
								{/if}

								{#if job.description}
									<p class="mt-3 max-w-content text-sm text-muted">{job.description}</p>
								{/if}

								{#if job.tags?.length}
									<ul class="mt-3 flex flex-wrap gap-1.5">
										{#each job.tags as tag}
											<li
												class="rounded-full border border-border px-2.5 py-0.5 font-mono
													text-xs text-faint"
											>
												{tag}
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ol>
				</div>

				<aside class="flex flex-col gap-10">
					{#if resume.skills?.length}
						<div>
							<h3 class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
								Stack
							</h3>
							<dl class="flex flex-col gap-4">
								{#each resume.skills as group}
									<div>
										<dt class="text-sm font-bold text-text">{group.group}</dt>
										<dd class="mt-1.5 flex flex-wrap gap-1.5">
											{#each group.items as item}
												<span
													class="rounded border border-border px-2 py-0.5 font-mono text-xs
														text-muted"
												>
													{item}
												</span>
											{/each}
										</dd>
									</div>
								{/each}
							</dl>
						</div>
					{/if}

					{#if resume.education?.length}
						<div>
							<h3 class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
								Formação
							</h3>
							<ul class="flex flex-col gap-4">
								{#each resume.education as item}
									<li>
										<p class="text-sm font-bold text-text">{item.degree}</p>
										<p class="text-sm text-muted">{item.school}</p>
										{#if item.period}
											<p class="mt-0.5 font-mono text-xs text-faint">{item.period}</p>
										{/if}
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					<div class="flex flex-wrap gap-3">
						{#if resume.links?.pdf}
							<a
								href={resume.links.pdf}
								class="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-on-brand
									no-underline transition-opacity hover:opacity-90"
							>
								Baixar PDF
							</a>
						{/if}
						{#if resume.links?.linkedin}
							<a
								href={resume.links.linkedin}
								rel="external noopener"
								class="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted
									no-underline transition-colors hover:border-accent hover:text-accent"
							>
								LinkedIn ↗
							</a>
						{/if}
					</div>
				</aside>
			</div>
		</div>
	</section>
{/if}
