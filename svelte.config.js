import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/undp-dli-iq'
		}
	}
};

export default config;
