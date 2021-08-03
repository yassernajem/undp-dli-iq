<script context="module">
	import { base } from '$app/paths';
	import { dev } from '$app/env';
	const images = import.meta.globEager('./_images/*.png');

	export async function load({ fetch, page }) {
		const baseUrl = dev ? page.path : base + page.path;
		const getData = (resourceName) => fetch(resourceName).then((res) => res.json());
		const data = await getData(`${baseUrl}visualisations.json`);
		return {
			props: {
				visualisations: data.visualisations,
				images
			}
		};
	}
</script>

<script>
	import VizCard from '$lib/VizCard.svelte';
	import dli_home from '$lib/assets/dli_home.png';
	export let visualisations;
	export let images;
</script>

<div class="bg-dark">
	<div class="container text-white">
		<div class="row">
			<div class="col-12 text-center py-5">
				<img src={dli_home} class="mb-3" alt="dli_logo" width="175" height="auto" />
				<h2>Digital Lighthouse Initiative</h2>
				<p>Monitoring Hate Speech Using Big Data and Machine Learning</p>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row py-4 mb-3 border-bottom border-light">
		<div class="col-12 col-md-3">
			<h6 class="text-info">Introduction</h6>
		</div>
		<div class="col-12 col-md-6">
			<p>
				Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras
				justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante
				venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere
				consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Maecenas
				faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
				vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
				tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
				risus.
			</p>
		</div>
	</div>
	<div class="row my-2">
		<div class="col-12 col-md-3">
			<h6 class="text-info">Visualisations</h6>
		</div>
	</div>
	<div class="row mb-4 gy-4">
		{#each visualisations as visualisation, i}
			<div class="col-12 col-md-3">
				<VizCard
					{...visualisation}
					thumb_path={images[`./_images/${visualisation.thumb}`].default}
					number={i}
				/>
			</div>
		{/each}
	</div>
</div>
