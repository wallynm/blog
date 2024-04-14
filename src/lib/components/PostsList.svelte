<script>
	import CategoriesPostTitle from "./categories/CategoriesPostTitle.svelte";

	export let posts = []
</script>

<section class="posts-list body-font overflow-hidden">
	<div class="container px-5 py-12 mx-auto">
	{#each posts as post}
			<div class="-my-8 divide-y-2 divide-gray-100">
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
						<a class="items-center mt-4" href="/blog/{post.slug}">
							<h3 class="text-3xl font-bold">
								{post.title}
							</h3>
						</a>
						<span class="mt-1 text-sm text-gray-100 dark:bg-slate-500">// {post.date}</span>
						<CategoriesPostTitle class="mt-1 text-sm text-gray-100 dark:bg-slate-500" categories={post.categories} />
					</div>
				</div>
			</div>
			{/each}
		</div>
</section>

