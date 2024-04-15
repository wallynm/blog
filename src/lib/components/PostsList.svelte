<script>
	import CategoriesPostTitle from "./categories/CategoriesPostTitle.svelte";

	export let posts = []
</script>

<section class="posts-list body-font overflow-hidden">
	{#each posts as post}
		<div class=" divide-y-2 divide-gray-100">
			<div class="py-8 flex flex-wrap md:flex-nowrap">
				<!-- <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
					<span class="font-semibold title-font">{post.category}</span>
					<span class="mt-1 text-sm">// {post.date}</span>
					<img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
				</div> -->
				<div class="md:flex-grow">
					<a class="items-center mt-4 hover:underline" href="/blog/{post.slug}">
						<h3 class="text-3xl font-bold">
							{post.title}
						</h3>
					</a>
					<div class="flex mt-1 text-sm">
						<span class="mr-2">// {post.date}</span>
						<CategoriesPostTitle class="" categories={post.categories} />
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>

