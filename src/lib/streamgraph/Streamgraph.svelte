<script>
	import {
		schemePaired,
		rollup,
		stack,
		stackOffsetNone,
		scaleTime,
		scaleLinear,
		min,
		max,
		area,
		scaleOrdinal,
		timeFormat,
		timeDay
	} from 'd3';
	import { getContext } from 'svelte';
	export let data = [];
	export let width;
	export let height;
	export let groupColors;
	export let view = 'stackOffsetNone';

	const offset = {
		stackOffsetNone: stackOffsetNone,
		stackOffsetSplit: stackOffsetSplit
	};
	const brushExtent = getContext('brushExtent');
	const margin = { top: 20, right: 0, bottom: 20, left: 0 };
	$: chartWidth = width - margin.left - margin.right;
	$: chartHeight = height - margin.top - margin.bottom;

	$: streams = [...new Set(data.map((d) => d.Category))];
	$: groups = rollup(
		data,
		(v) => {
			const local = rollup(
				v,
				(z) => z[0].frequency,
				(d) => d.Category
			);
			return local;
		},
		(d) => d.date
	);

	$: series = stack()
		.keys(streams)
		.value((data, key) => {
			return data[1].has(key) ? data[1].get(key) : 0;
		})
		.offset(offset[view])(groups);

	$: xScale = scaleTime().domain($brushExtent).range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([min(series, (d) => min(d, (d) => d[0])), max(series, (d) => max(d, (d) => d[1]))])
		.range([chartHeight, 0]);

	$: colorScale = scaleOrdinal()
		.domain(groupColors.map((d) => d.category))
		.range(groupColors.map((d) => d.color.formatHex()));

	$: areaStack = area()
		.x((d) => xScale(d.data[0]))
		.y0((d) => yScale(d[0]))
		.y1((d) => yScale(d[1]));

	$: xTicks = xScale.ticks();

	let pathOver;
	let dateStamp;
	let selectedData;

	function onMouseover(key) {
		pathOver = key;
	}

	function onMouseout() {
		pathOver = null;
		selectedData = null;
		dateStamp = null;
	}

	function onMove(event, stream) {
		dateStamp = timeDay.round(xScale.invert(event.offsetX));
		selectedData = stream.filter(
			(d) => d.data[0].setHours(0, 0, 0, 0) === dateStamp.setHours(0, 0, 0, 0)
		)[0];
	}

	function stackOffsetSplit(series, order) {
		let n = series.length;
		if (!n) return;
		const padding = max(series, (s) => max(s, (d) => d[1] - d[0])) * 0.1;
		for (let i = 1, s0, s1 = series[order[0]], m = s1.length; i < n; ++i) {
			(s0 = s1), (s1 = series[order[i]]);
			const s0Max = max(s0, (d) => d[1]);
			for (let j = 0; j < m; ++j) {
				s1[j][1] += s1[j][0] = s0Max + padding;
			}
		}
	}
</script>

<svg {width} {height}>
	{#if series.length && width && height}
		<g transform={`translate(${margin.left}, ${margin.top})`}>
			{#each series as stream (stream.key)}
				<path
					class="stream"
					d={areaStack(stream)}
					fill={colorScale(stream.key)}
					class:notOver={pathOver && pathOver !== stream.key}
					on:mouseover={() => onMouseover(stream.key)}
					on:mouseout={onMouseout}
					on:mousemove={(e) => onMove(e, stream)}
				/>
				<!-- <g transform={`translate(0,${-yScaleSplit(stream.key)})`}>
				<path d={areaStackSplit(stream)} fill={colorScale(stream.key)} />
			</g> -->
			{/each}
		</g>

		<g transform="translate({margin.left}, {chartHeight + margin.top})">
			{#each xTicks as x, i}
				<g transform="translate({xScale(x)},0)">
					<line stroke="#DEE2E6" y2={-chartHeight} class="pe-none" />
					<text
						dominant-baseline="hanging"
						fill="currentColor"
						text-anchor="middle"
						y={6}
						font-size="10px"
					>
						{timeFormat(
							`${i > 0 && x.getMonth() === xTicks[i - 1].getMonth() ? '%d %b' : '%b'} %Y`
						)(x)}
					</text>
				</g>
			{/each}
		</g>
		<g transform={`translate(${margin.left}, ${margin.top})`}>
			{#if selectedData}
				<line class="dateStamp" x1={xScale(dateStamp)} x2={xScale(dateStamp)} y2={chartHeight} />
				<line
					class="dateStampSelected"
					x1={xScale(dateStamp)}
					x2={xScale(dateStamp)}
					y1={yScale(selectedData[0])}
					y2={yScale(selectedData[1])}
				/>
				<text
					text-anchor={xScale(dateStamp) > chartWidth / 2 ? 'end' : 'start'}
					font-size="10"
					dx={xScale(dateStamp) > chartWidth / 2 ? -3 : 3}
					x={xScale(dateStamp)}
					y={yScale(selectedData[1])}
					class="outline"
				>
					{pathOver}
					{' '}
					<tspan class="fw-bold">
						{timeFormat('%Y-%m-%d')(selectedData.data[0])}
					</tspan>
				</text>
				<text
					text-anchor={xScale(dateStamp) > chartWidth / 2 ? 'end' : 'start'}
					font-size="10"
					dx={xScale(dateStamp) > chartWidth / 2 ? -3 : 3}
					x={xScale(dateStamp)}
					y={yScale(selectedData[1]) + 13}
					class="outline"
				>
					<tspan class="fw-bold">
						{selectedData.data[1].get(pathOver)}
					</tspan>
				</text>
			{/if}
		</g>
	{/if}
</svg>

<style>
	.stream {
		fill-opacity: 1;
		stroke: white;
		stroke-width: 0.1;
	}

	.stream.notOver {
		fill-opacity: 0.25;
	}

	.dateStamp {
		stroke: black;
		opacity: 0.5;
		stroke-dasharray: 3, 3;
		pointer-events: none;
	}

	.dateStampSelected {
		stroke: black;
		pointer-events: none;
	}

	.outline {
		pointer-events: none;
		paint-order: stroke;
		stroke: white;
		stroke-width: 2;
	}
</style>
