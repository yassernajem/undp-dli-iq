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
		sum,
		scaleOrdinal,
		timeFormat,
		timeDay,
		utcDay,
		utcWeek,
		utcMonth,
		extent,
		curveStep,
		curveMonotoneX,
		curveLinear,
		stackOrderNone
	} from 'd3';
	import { Tooltip, Popover } from 'sveltestrap';
	import { getContext } from 'svelte';
	import YAxis from './YAxis.svelte';
	import { select_multiple_value } from 'svelte/internal';
	export let data = [];
	export let dataEvents = [];
	export let width;
	//export let height;
	export let aggregation;
	export let scaleType;

	const aggDict = {
		Day: utcDay,
		Week: utcWeek,
		Month: utcMonth
	};
	const brushExtent = getContext('brushExtent');
	const margin = { top: 20, right: 0, bottom: 20, left: 30 };
	const areaHeight = 90;
	const areaHeightMargin = 20;
	$: chartWidth = width - margin.left - margin.right;

	$: xScale = scaleTime().domain($brushExtent).range([0, chartWidth]);

	$: xScaleUtils = scaleTime()
		.domain(extent(data, (d) => d.date))
		.range([0, chartWidth]);

	//$: groupsData = groups(data, (d) => d.dimension);

	$: groupsData = rollups(
		data,
		(v) => sum(v, (d) => d.value),
		(d) => d.dimension,
		(d) => aggDict[aggregation](d.date)
	);
	//$: console.log(testData);

	$: height = areaHeight * groupsData.length + margin.top + margin.bottom;
	$: chartHeight = height - margin.top - margin.bottom;

	$: dataFilled = groupsData.map((d) => {
		return [
			d[0],
			mergeByDate(
				xScaleUtils.ticks(aggDict[aggregation]).map((t) => {
					return { date: t, value: undefined };
				}),
				d[1].map((v) => {
					return { date: v[0], value: v[1] };
				}),
				'date'
			)
		];
	});

	$: dataEventsGrouped = groups(dataEvents, (d) => d.date);
	$: yDataMax = max(dataFilled, (d) => max(d[1], (d) => d.value));

	// $: yScale = scaleLinear()
	// 	.domain([0, max(series, (d) => max(d, (d) => d[1]))])
	// 	.range([chartHeight, 0]);

	// alternative
	// $: yScale = scaleLog()
	// .clamp(true)
	// .domain([1, max(series, (d) => max(d, (d) => d[1]))])
	// .range([chartHeight, 0]);

	$: areaPath = function (data) {
		const yMax = scaleType === 'Same scale' ? yDataMax : max(data, (d) => d.value);
		const yScale = scaleLinear().domain([0, yMax]).range([areaHeight, areaHeightMargin]);

		return area()
			.defined((d) => !isNaN(d.value))
			.x((d) => xScale(d.date))
			.y0(areaHeight)
			.y1((d) => yScale(d.value))
			.curve(curveLinear)(data);
	};

	$: xTicks = xScale.ticks();

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

	function onMove(event, stream, i) {
		dateStamp = timeDay.round(xScale.invert(event.offsetX));
		selectedData = stream.filter(
			(d) => d.data[0].setHours(0, 0, 0, 0) === dateStamp.setHours(0, 0, 0, 0)
		)[0];
		selectedData.index = i;
		selectedData.maxStream = max(stream, (d) => d[1]);
	}

	function raise(e) {
		select(e.target).raise();
	}

	function lower(e) {
		select(e.target).lower();
	}

	function mergeByDate(a1, a2, prop = 'x') {
		return a1.map((itm) => ({
			...itm,
			...a2.find((item) => item[prop].getTime() === itm[prop].getTime() && item)
		}));
	}

	$: toolTipYScale = function (selected, i, maxStream) {
		if (view === 'stackOffsetNone') {
			return yScale(selected);
		} else {
			const yScaleLocal = scaleLinear().domain([0, maxStream]).range([streamHeight, 0]);
			if (maxStream) {
				return streamHeight * i + yScaleLocal(selected);
			} else {
				return streamHeight * i + streamHeight;
			}
		}
	};
</script>

<svg {width} {height}>
	{#if dataFilled && width && height}
		<g transform={`translate(${margin.left}, ${margin.top})`}>
			{#each dataFilled as dimension, i (dimension[0])}
				<g transform={`translate(0, ${areaHeight * i})`}>
					<path class="stream" d={areaPath(dimension[1])} />

					<text font-size="10" x={-margin.left} y={12} class="outline">
						{dimension[0].replaceAll('_', ' ')}
					</text>
					<line
						stroke="#DEE2E6"
						x1={-margin.left}
						x2={chartWidth}
						y1={areaHeight}
						y2={areaHeight}
					/>
					<YAxis
						data={dimension[1]}
						{chartWidth}
						{areaHeight}
						{areaHeightMargin}
						{scaleType}
						{yDataMax}
					/>
				</g>
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
			<text font-size="10" x={-margin.left} y={2} class="outline" fill="#6c757d">events</text>
			<line
				stroke="#DEE2E6"
				x1={-margin.left}
				x2={chartWidth}
				y1={margin.top / 2}
				y2={margin.top / 2}
			/>
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
		<!-- <g transform={`translate(${margin.left}, ${margin.top})`}>
			{#if selectedData}
				<line class="dateStamp" x1={xScale(dateStamp)} x2={xScale(dateStamp)} y2={chartHeight} />
				<line
					class="dateStampSelected"
					x1={xScale(dateStamp)}
					x2={xScale(dateStamp)}
					y1={toolTipYScale(selectedData[0], selectedData.index)}
					y2={toolTipYScale(selectedData[1], selectedData.index, selectedData.maxStream)}
				/>
				<text
					text-anchor={xScale(dateStamp) > chartWidth / 2 ? 'end' : 'start'}
					font-size="10"
					dx={xScale(dateStamp) > chartWidth / 2 ? -3 : 3}
					x={xScale(dateStamp)}
					y={toolTipYScale(selectedData[1], selectedData.index, selectedData.maxStream)}
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
					y={toolTipYScale(selectedData[1], selectedData.index, selectedData.maxStream) + 13}
					class="outline"
				>
					<tspan class="fw-bold">
						{selectedData.data[1].find((d) => d[0] === pathOver)
							? selectedData.data[1].find((d) => d[0] === pathOver)[1]
							: 'missing'}
					</tspan>
				</text>
			{/if}
		</g> -->
	{/if}
</svg>

{#if dataFilled.length && width && height}
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
		fill: var(--bs-primary);
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
