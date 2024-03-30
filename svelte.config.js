import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeExternalLinks,
				rehypeSlug,
				rehypeAutolinkHeadings,
				{
					// Adds hyperlinks to the headings, requires rehypeSlug
					behavior: 'prepend',
					properties: { className: ['heading-link'], title: 'Permalink', ariaHidden: 'true' },
					content: {
						type: 'element',
						tagName: 'span',
						properties: {
							className: ['rehypeAutolinkHeadings'],
						},
						children: [{ type: 'text', value: '#' }]
					}
				}
			],
		}),
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: ''
		},
		prerender: {
		entries: [
			'*',
			'/api/posts/page/*',
			'/blog/category/*/page/',
			'/blog/category/*/page/*',
			'/blog/category/page/',
			'/blog/category/page/*',
			'/blog/page/',
			'/blog/page/*',
		]
		}
	}
};

export default config;
