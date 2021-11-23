<script context="module">
	import { base } from '$app/paths';
	import { dev } from '$app/env';

	export async function load({ page, fetch }) {
		const baseUrl = dev ? page.path : base + page.path;
		const res = await fetch(`${baseUrl}/data.json`);
		const res2 = await fetch(`${baseUrl}.json`);
		const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				info: info.data,
				linechart: {
					tweets: dataTable.tweets,
					users: dataTable.users
				},
				events: dataTable.events,
				dataChart: dataTable.data
			}
		};
	}
</script>

<script>
	import { extent, groups, schemeTableau10, color, ascending } from 'd3';
	import MultipleAreaChart from '$lib/MultipleAreaChart.svelte';
	import LinechartStream from '$lib/LinechartStream.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	export let info;
	export let dataChart;
	export let events;
	export let linechart;

	let w;
	let h;

	let display = Object.keys(dataChart).sort();

	let selectedDisplay = display[0];

	const aggregations = ['Day', 'Week', 'Month'];

	let selectedAggregation = aggregations[0];

	const scales = ['Same scale', 'Independent scale'];

	let selectedScale = scales[0];

	$: data = dataChart[selectedDisplay]
		.map((d) => {
			return { ...d, date: new Date(d.day) };
		})
		.sort((a, b) => ascending(a.day, b.day));

	$: dataLinechart = linechart[selectedDisplay].map((d) => {
		return { y: d[selectedDisplay], x: new Date(d.day) };
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
	<PageIntro title={info.title} description={info.desc} />
</div>
<div class="bg-light w-100 containerViz">
	<div class="container h-100 d-flex flex-column">
		<div class="row border-bottom py-2">
			<div class="col-md-3">
				<div class="mb-3">
					<div class="form-label">Display</div>
					{#each display as d}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								bind:group={selectedDisplay}
								type="radio"
								name={d}
								id={d}
								value={d}
							/>
							<label class="form-check-label" for={d}>{d}</label>
						</div>
					{/each}
				</div>
			</div>
			<div class="col-md-4">
				<div class="mb-3">
					<div class="form-label">Aggregate</div>
					{#each aggregations as a}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								bind:group={selectedAggregation}
								type="radio"
								name={a}
								id={a}
								value={a}
							/>
							<label class="form-check-label" for={a}>{a}</label>
						</div>
					{/each}
				</div>
			</div>
			<div class="col-md-auto ms-auto">
				<div class="form-label">Y scale</div>
				{#each scales as s}
					<div class="form-check form-check-inline">
						<input
							class="form-check-input"
							bind:group={selectedScale}
							type="radio"
							name={s}
							id={s}
							value={s}
						/>
						<label class="form-check-label" for={s}>{s}</label>
					</div>
				{/each}
			</div>
		</div>
		<div class="row py-2 border-bottom">
			<div class="col-12">
				<p class="text-muted mb-0"><small>Total {selectedDisplay}</small></p>
				<LinechartStream width={w} data={dataLinechart} />
			</div>
		</div>
		<div class="row flex-grow-1 flex-shrink-1 overflow-auto" bind:clientHeight={h}>
			<div class="col-12">
				<div bind:clientWidth={w} class="w-100 h-100">
					<MultipleAreaChart
						width={w}
						height={h}
						aggregation={selectedAggregation}
						scaleType={selectedScale}
						{data}
						{dataEvents}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
