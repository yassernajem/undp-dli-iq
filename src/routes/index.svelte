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

	$: narrative = visualisations.filter((d) => d.section === 'narrative');
	$: methodology = visualisations.filter((d) => d.section === 'methodology');
</script>

<div class="bg-primary" style="background-image:url('{dli_home}')">
	<div class="container text-white">
		<div class="row">
			<div class="col-12 py-4 position-relative headerImg">
				<h2 class="fs-1">A New Social Contract for Iraq</h2>
				<p class="fs-3">Big Data Analysis on Twitter: July 2021</p>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row py-4 mb-3">
		<div class="col-12 col-md-3">
			<h6 class="text-info">Introduction</h6>
		</div>
		<div class="col-12 col-md-6">
			<p>
				In 2021, UNDP in Iraq launched the project ‘Reimagining a New Social Contract in Iraq’ to
				explore how Iraqis envision the social contract. To be able to capture the diverse
				perceptions of all groups, this project operationalized a multimethod framework of data
				collection and analysis. As part of this process, UNDP conducted a big data analysis for the
				period January 2018-June 2021 of Iraq’s Twitterspace, identified using the Historical Power
				Track API/Enterprise Twitter API. The latter has been accessed through the UN Global Pulse
				Twitter interface and is in line with the UN Principles on Personal Data Protection and
				Privacy. Over this period, the Twitter database recorded 882,556 unique users in Iraq, of
				which 699,805 (79%) are Arabic-speaking users and 27,371 (3%) Kurdish-speaking users. These
				users generated 76.8 million tweets, and in total, 3.5 million tweets discussed what the
				project defines as core grievances. The analysis and findings presented in this dashboard
				are the outcome of mining this full dataset and listening to the conversations in accordance
				with how they relate to these grievances and perceptions towards the future.
			</p>
		</div>
	</div>
	<div class="row my-2">
		<div class="col-12">
			<h5 class="text-primary border-top border-light pt-3">Narrative Visualisations</h5>
		</div>
	</div>
	<div class="row mb-4 gy-4">
		{#each narrative as visualisation, i}
			<div class="col-12 col-md-3">
				<VizCard
					{...visualisation}
					thumb_path={images[`./_images/${visualisation.thumb}`].default}
					number={i}
				/>
			</div>
		{/each}
	</div>
	<div class="row my-2">
		<div class="col-12">
			<h5 class="text-primary border-top border-light pt-3">
				Methodology and Twitter Demographics
			</h5>
		</div>
	</div>
	<div class="row mb-4 gy-4">
		{#each methodology as visualisation, i}
			<div class="col-12 col-md-3">
				<VizCard
					{...visualisation}
					thumb_path={images[`./_images/${visualisation.thumb}`].default}
					number={i + narrative.length}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.headerImg {
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 350px;
	}
</style>
