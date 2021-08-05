<script context="module">
	import { base } from '$app/paths';
	import { dev } from '$app/env';

	export async function load({ page, fetch }) {
		const baseUrl = dev ? page.path : base + page.path;
		const res = await fetch(`${baseUrl}/data.json`);
		const res2 = await fetch(`${baseUrl}.json`);
		//const res = await fetch(`/circlepack.tsv`);
		const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				emotions: dataTable.emotions,
				info: info.data,
				tweets: dataTable.tweets,
				events: dataTable.events,
				emo: dataTable.emo
			}
		};
	}
</script>

<script>
	import { extent, groups, schemeTableau10, color, ascending } from 'd3';
	import Streamgraph from '$lib/streamgraph/Streamgraph.svelte';
	import LinechartStream from '$lib/LinechartStream.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let emotions;
	export let info;
	export let emo;
	export let events;
	export let tweets;

	let w;
	let h;

	let languages = Object.keys(emo).sort();
	let selectedLanguage = languages[0];

	let macroCategories = [
		'all',
		...new Set(
			Object.values(emo)
				.flat()
				.map((d) => d.macro_dimension)
		)
	];
	let selectedMacroCategory = macroCategories[0];
	let categories = [...new Set(emo[selectedLanguage].map((d) => d.dimension))];

	const emotionsGroup = groups(
		Object.values(emo).flat(),
		(d) => d.macro_dimension,
		(d) => d.dimension
	);

	const groupColors = emotionsGroup
		.map((d, i) => {
			const mainColor = schemeTableau10[i];
			const step = 1 / d[1].length;
			const categories = d[1].map((c, l) => {
				return { category: c[0], macro_category: d[0], color: color(mainColor).brighter(l * step) };
			});
			return categories;
		})
		.flat();

	$: data = emo[selectedLanguage]
		.map((d) => {
			return { ...d, date: new Date(d.date) };
		})
		.filter((d) =>
			selectedMacroCategory !== 'all' ? selectedMacroCategory === d.macro_dimension : true
		)
		.sort((a, b) => ascending(a.date, b.date));

	$: dataLinechart = tweets.map((d) => {
		return { y: d.tweets_count, x: new Date(d.date) };
	});

	$: dataEvents = events.map((d) => {
		return { date: new Date(d.date), event: d.event };
	});

	$: setContext(
		'brushExtentDefault',
		extent(dataLinechart, (d) => d.x)
	);

	$: brushExtentStore = writable(extent(dataLinechart, (d) => d.x));
	$: setContext('brushExtent', brushExtentStore);

	let view = 'stackOffsetNone';
</script>

<div class="container">
	<PageIntro title={info.title} />
</div>
<div class="bg-light w-100 containerViz">
	<div class="container h-100 d-flex flex-column">
		<div class="row border-bottom py-2">
			<div class="col-md-3">
				<div class="mb-3">
					<label for="language" class="form-label">Language</label>
					<select
						bind:value={selectedLanguage}
						class="form-select"
						id="language"
						aria-label="Language"
					>
						{#each languages as language}
							<option value={language}>
								{language}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-md-4">
				<div class="mb-3">
					<label for="macroCategory" class="form-label">Macro category</label>
					<select
						bind:value={selectedMacroCategory}
						class="form-select"
						id="macroCategory"
						aria-label="macroCategory"
					>
						{#each macroCategories as macroCategory}
							<option value={macroCategory}>
								{macroCategory}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-md-auto ms-auto">
				<label for="options" class="form-label w-100">View</label>
				<div class="btn-group" role="group">
					<input
						type="radio"
						bind:group={view}
						class="btn-check"
						name="options"
						id="option1"
						autocomplete="off"
						value={'stackOffsetNone'}
					/>
					<label class="btn btn-secondary" for="option1">Stack</label>
					<input
						type="radio"
						bind:group={view}
						class="btn-check"
						name="options"
						id="option2"
						autocomplete="off"
						value={'stackOffsetSplit'}
					/>
					<label class="btn btn-secondary" for="option2">Split</label>
				</div>
			</div>
		</div>
		<div class="row flex-grow-1 flex-shrink-1 overflow-hidden" bind:clientHeight={h}>
			<div class="col-12">
				<div bind:clientWidth={w} class="w-100 h-100">
					<Streamgraph width={w} height={h} {data} {groupColors} {view} {dataEvents} />
				</div>
			</div>
		</div>
		<div class="row py-2 border-top">
			<div class="col-12">
				<p class="text-muted mb-0"><small>Total tweets</small></p>
				<LinechartStream width={w} data={dataLinechart} />
			</div>
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
