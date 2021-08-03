<script context="module">
	import { group, tsvParse, autoType } from 'd3';
	export const ssr = false;
	//export const hydrate = false;
	export async function load({ page, fetch }) {
		const res = await fetch(`/circlepack.tsv`);
		const dataTable = await res.text();
		const groupsMap = group(
			tsvParse(dataTable, autoType),
			(d) => d.lang,
			(d) => d.event
		);
		return {
			props: {
				dataMap: groupsMap
			}
		};
	}
</script>

<script>
	import { descending, scaleOrdinal, range, format } from 'd3';
	import Circlepack from '$lib/circlepack/Circlepack.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	export let dataMap;

	const days = range(-7, 8, 1);
	const scaleThreshold = scaleOrdinal()
		.domain(['0', '0.5', '1'])
		.range([10, 50, +Infinity]);
	let w;
	let selectedLanguage = Array.from(dataMap.keys())[0];
	let selectedEvent = Array.from(dataMap.get(selectedLanguage), (d) => d[0])[0];
	let selectedDay = 0;
	let threshold = 1.0;

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
	<PageIntro />
</div>
<div class="bg-light w-100">
	<div class="container">
		<div class="row">
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
								{event}
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
		<div class="row">
			<div class="col-12">
				<div bind:clientWidth={w} style="width:100%">
					<Circlepack width={w} {data} day={selectedDay} />
				</div>
			</div>
		</div>
		<div class="row">
			{#each days as day}
				<div class="col">
					<button
						on:click={() => handleDays(day)}
						type="button"
						class={`btn w-100 ${day === selectedDay ? 'btn-secondary' : 'btn-outline-secondary'}`}
					>
						{day ? format('+')(day) : day}
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
