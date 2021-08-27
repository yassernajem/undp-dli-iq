<script>
	import {
		select,
		schemePaired,
		groups,
		rollup,
		rollups,
		stack,
		stackOffsetNone,
		scaleTime,
		scaleLinear,
		scaleLog,
		min,
		max,
		area,
		scaleOrdinal,
		timeFormat,
		timeDay,
		utcDay,
		extent,
		curveStep,
		curveMonotoneX,
		curveLinear
	} from 'd3';
	import { Tooltip, Popover } from 'sveltestrap';
	import { getContext } from 'svelte';
	export let data = [];
	export let dataEvents = [];
	export let width;
	export let height;
	export let groupColors = [];
	export let view = 'stackOffsetNone';

	const offset = {
		stackOffsetNone: stackOffsetNone,
		stackOffsetSplit: stackOffsetSplit
	};
	const brushExtent = getContext('brushExtent');
	const margin = { top: 20, right: 0, bottom: 20, left: 0 };
	$: chartWidth = width - margin.left - margin.right;
	$: chartHeight = height - margin.top - margin.bottom;

	$: xScale = scaleTime().domain($brushExtent).range([0, chartWidth]);

	$: xScaleUtils = scaleTime()
		.domain(extent(data, (d) => d.date))
		.range([0, chartWidth]);

	$: streams = [...new Set(data.map((d) => d.dimension))];

	$: groupsData = rollups(
		data,
		(v) => {
			const local = rollups(
				v,
				(z) => z[0].frequency,
				(d) => d.dimension
			);
			return local;
		},
		(d) => d.date
	);

	$: dataFilled = mergeByDate(
		xScaleUtils.ticks(utcDay).map((d) => {
			return [d, []];
		}),
		groupsData,
		0
	);

	$: dataEventsGrouped = groups(dataEvents, (d) => d.date);

	$: series = stack()
		.keys(streams)
		.value((data, key) => {
			const elm = data[1].find((d) => d[0] === key);
			return elm ? elm[1] : 0;
		})
		.offset(offset[view])(dataFilled);

	$: yScale = scaleLinear()
		.domain([0, max(series, (d) => max(d, (d) => d[1]))])
		.range([chartHeight, 0]);

	// alternative
	// $: yScale = scaleLog()
	// .clamp(true)
	// .domain([1, max(series, (d) => max(d, (d) => d[1]))])
	// .range([chartHeight, 0]);

	// todo fix color scale -> other category can be in more macro category
	$: colorScale = scaleOrdinal()
		.domain(groupColors.map((d) => d.category))
		.range(groupColors.map((d) => d.color.formatHex()));

	$: areaStack = area()
		//.defined((d) => !isNaN(d[1]))
		.x((d) => xScale(d.data[0]))
		.y0((d) => yScale(d[0]))
		.y1((d) => yScale(d[1]))
		.curve(curveLinear);

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

	function raise(e) {
		select(e.target).raise();
	}

	function lower(e) {
		select(e.target).lower();
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

	function mergeByDate(a1, a2, prop = 'x') {
		return a1.map((itm) => ({
			...itm,
			...a2.find((item) => item[prop].getTime() === itm[prop].getTime() && item)
		}));
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
			{/each}
		</g>
		<g transform={`translate(${margin.left}, ${margin.top / 2})`}>
			{#each dataEventsGrouped as eventG, i}
				<circle
					id={`event_${i}`}
					class="event"
					cx={xScale(eventG[0])}
					cy={0}
					r={3 * eventG[1].length}
					on:mouseover={raise}
					on:mouseout={lower}
				/>
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
						{selectedData.data[1].find((d) => d[0] === pathOver)
							? selectedData.data[1].find((d) => d[0] === pathOver)[1]
							: 'missing'}
					</tspan>
				</text>
			{/if}
		</g>
	{/if}
</svg>
{#if series.length && width && height}
	{#each dataEventsGrouped as eventG, i}
		<Popover
			container="body"
			title={timeFormat('%Y-%m-%d')(eventG[0])}
			target={`event_${i}`}
			trigger="hover"
			placement={'top'}
		>
			{#each eventG[1] as event}
				<p>{event.event}</p>
			{/each}
		</Popover>
	{/each}
{/if}

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

	.event {
		fill: var(--bs-primary);
		stroke: white;
	}

	.event:hover {
		stroke: black;
	}
</style>
