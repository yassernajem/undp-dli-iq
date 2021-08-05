import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: { base: '/undp-dli-iq' },
		vite: {
			ssr: {
				noExternal: ['d3']
			},
			optimizeDeps: {
				include: ['d3']
			}
		}
	}
};

export default config;
