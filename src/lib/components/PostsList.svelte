<script>
	export let posts = []
</script>

<section class="posts-list body-font overflow-hidden">
	<div class="container px-5 py-12 mx-auto">
	{#each posts as post}
			<div class="-my-8 divide-y-2 divide-gray-100">
				<div class="py-8 flex flex-wrap md:flex-nowrap">
					<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
						<span class="font-semibold title-font">{post.category}</span>
						<span class="mt-1 text-sm">12 Jun 2019</span>
						<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						/>
					</div>
					<div class="md:flex-grow">
						<h2 class="text-2xl font-medium title-font mb-2 mt-10">{post.title}</h2>
						<p class="leading-relaxed">{post.excerpt}</p>
						<a class="inline-flex items-center mt-4" href="/blog/{post.slug}">Learn More
							<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			{/each}
		</div>
</section>

