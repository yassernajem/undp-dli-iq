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
				dataTable: dataTable.rows,
				info: info.data
			}
		};
	}
</script>

<script>
	import { descending, scaleOrdinal, range, format, group } from 'd3';
	import Circlepack from '$lib/circlepack/Circlepack.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	export let dataTable;
	export let info;

	const eventsLabelDict = {
		'2020-08-04': 'Beirut explosion (2020-08-04)',
		'2019-07-04': 'African cup match (2019-07-04)',
		'2019-06-22': 'Tunis bombings (2019-06-22)'
	};

	const dataMap = group(
		dataTable,
		(d) => d.lang,
		(d) => d.event
	);

	const days = range(-7, 8, 1);
	const scaleThreshold = scaleOrdinal()
		.domain(['0', '0.5', '1'])
		.range([10, 50, +Infinity]);
	let w;
	let h;
	let selectedLanguage = Array.from(dataMap.keys())[0];
	let selectedEvent = Array.from(dataMap.get(selectedLanguage), (d) => d[0])[0];
	let selectedDay = 0;
	let threshold = 0.5;

	let languages = Array.from(dataMap, (d) => d[0]);
	let events = Array.from(dataMap.get(selectedLanguage), (d) => d[0]);

	const headers = [
		'-7',
		'-6',
		'-5',
		'-4',
		'-3',
		'-2',
		'-1',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7'
	];

	$: data = dataMap
		.get(selectedLanguage)
		.get(selectedEvent)
		.map((d) => {
			const series = headers.map((h) => {
				return { x: +h, y: d[h] };
			});
			return {
				name: d.word,
				r: Math.sqrt(d[selectedDay] / Math.PI),
				value: d[selectedDay],
				series
			};
		})
		.sort((a, b) => descending(a.r, b.r))
		.filter((d, i) => d.r && i <= scaleThreshold(threshold));

	function handleDays(day) {
		selectedDay = day;
	}
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
					<label for="event" class="form-label">Event</label>
					<select bind:value={selectedEvent} class="form-select" id="event" aria-label="Event">
						{#each events as event}
							<option value={event}>
								{eventsLabelDict[event]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-md-2 offset-md-3">
				<div class="mb-0">
					<label for="rangeWords" class="form-label">Threshold</label>
					<input
						bind:value={threshold}
						type="range"
						class="form-range"
						min="0"
						max="1"
						step="0.5"
						id="rangeWords"
					/>
					<div class="d-flex justify-content-between w-100">
						<div class="col-3">top 10</div>
						<div class="col-3 text-center">top 50</div>
						<div class="col-3 text-end">All</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row flex-grow-1 flex-shrink-1 overflow-hidden" bind:clientHeight={h}>
			<div class="col-12">
				<div bind:clientWidth={w} class="w-100 h-100">
					<Circlepack width={w} height={h} {data} day={selectedDay} />
				</div>
			</div>
		</div>
		<div class="row py-2 gx-0">
			{#each days as day}
				<div class="col-auto col-md">
					<button
						on:click={() => handleDays(day)}
						type="button"
						class={`btn btn-sm rounded-0 w-100 ${
							day === selectedDay ? 'btn-secondary' : 'btn-outline-secondary'
						}`}
					>
						{day ? format('+')(day) : day}
						<span class="d-none d-md-inline">{`day${Math.abs(day) > 1 ? 's' : ''}`}</span>
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
