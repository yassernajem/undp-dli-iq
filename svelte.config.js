import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import md from 'vite-plugin-markdown';
import footnotes from 'markdown-it-footnote';
import MarkdownIt from 'markdown-it';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter(),
		// paths: { base: '/undp-dli-iq' },
		vite: {
			ssr: {
				noExternal: ['d3']
			},
			// optimizeDeps: {
			// 	include: ['d3']
			// },
			plugins: [
				md.plugin({
					mode: 'html',
					markdownIt: new MarkdownIt({ html: true }).use(footnotes)
				})
			]
		}
	}
};

export default config;
