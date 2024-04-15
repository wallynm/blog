<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	import { getBackgroundBasedIntoLength } from '$lib/utils/categoryClassName.js';
	import CategoriesPostList from "$lib/components/categories/CategoriesPostList.svelte";
	import LayoutContent from '$lib/components/layout/LayoutContent.svelte';
	export let data;
	export let test:string;

	console.info(test)

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } =
		data.meta;
	const { PostContent } = data;

	let img = 'bg-post-6.png';
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<div class="-mb-4 md:-mb-6" style="height: 200px;">
	<img
		style="width: 100vw; object-fit: cover; height: 200px; z-index: -1; left:0px; right: 0px;
		-webkit-mask-image: url(/images/{img});
    mask-image: url(/images/{img});"
		class="cover-image"
		src={coverImage}
		alt=""
	/>
</div>
<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->



<LayoutContent>
	<section class="lg:-mx-20 ">
		<div class="mb-4 relative">
			<h1 class="inline font-normal	text-2xl p-2 box-decoration-clone md:text-5xl md:leading-normal lg:text-7xl lg:leading-tight {getBackgroundBasedIntoLength(categories[0])}">{title}</h1>
		</div>
		<span class="text-sm jetbrains-mono-regular">
			// Published {date} • Updated {updated}
		</span>
	</section>

	<article class="prose dark:prose-invert prose-lg mt-24 mb-32">
		<svelte:component this={PostContent} />
		<CategoriesPostList categories={categories} />
	</article>
</LayoutContent>
