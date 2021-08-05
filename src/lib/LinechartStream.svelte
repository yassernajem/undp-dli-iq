<script>
	import {
		line,
		curveStep,
		scaleLinear,
		scaleTime,
		max,
		extent,
		format,
		timeFormat,
		brushX,
		select,
		timeDay,
		utcDay
	} from 'd3';
	import { getContext } from 'svelte';
	export let data = [];
	export let width = 0;
	const height = 100;
	const margin = {
		top: 10,
		right: 0,
		bottom: 20,
		left: 30
	};

	const brushExtent = getContext('brushExtent');
	const brushExtentDefault = getContext('brushExtentDefault');

	const chartHeight = height - margin.top - margin.bottom;

	$: chartWidth = width - margin.left - margin.right;

	$: xScale = scaleTime()
		.domain(extent(data, (d) => d.x))
		.range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([0, max(data, (d) => d.y)])
		.range([chartHeight, 0]);

	let path = line()
		.defined((d) => !isNaN(d.y))
		.x((d) => xScale(d.x))
		.y((d) => yScale(d.y));
	//.curve(curveStep);

	$: yTicks = yScale.ticks(4);
	$: xTicks = xScale.ticks();

	$: dataFilled = mergeByDate(
		xScale.ticks(utcDay).map((d) => {
			return { x: d, y: undefined };
		}),
		data
	);

	let brushElement;

	$: brush = brushX()
		.extent([
			[0, 0],
			[chartWidth, chartHeight]
		])
		.on('brush', brushed)
		.on('end', brushended);

	$: if (brushElement) {
		select(brushElement).call(brush);
	}

	const interval = timeDay.every(1);

	function brushended(event) {
		const selection = event.selection;
		if (!selection) {
			brushExtent.set(brushExtentDefault);
		}
	}

	function brushed(event) {
		const selection = event.selection;
		if (!event.sourceEvent || !selection) return;
		const [x0, x1] = selection.map((d) => interval.round(xScale.invert(d)));
		select(this).call(brush.move, x1 > x0 ? [x0, x1].map(xScale) : null);
		brushExtent.set([x0, x1]);
	}

	function mergeByDate(a1, a2, prop = 'x') {
		return a1.map((itm) => ({
			...itm,
			...a2.find((item) => item[prop].getTime() === itm[prop].getTime() && item)
		}));
	}
</script>

<svg {width} {height}>
	{#if data.length && width && height}
		<g transform="translate({margin.left}, {margin.top})">
			{#each yTicks as y}
				<g class="tick" opacity="1" transform="translate(0,{yScale(y)})">
					<line stroke="#DEE2E6" x2={chartWidth} />
					<text
						dominant-baseline="middle"
						text-anchor="end"
						fill="currentColor"
						x="-5"
						font-size="10px"
					>
						{format('~s')(y)}
					</text>
				</g>
			{/each}
		</g>

		<g transform="translate({margin.left}, {chartHeight + margin.top})">
			{#each xTicks as x}
				<g transform="translate({xScale(x)},0)">
					<line stroke="#DEE2E6" y2={-chartHeight} />
					<text
						dominant-baseline="hanging"
						fill="currentColor"
						text-anchor="middle"
						y={6}
						font-size="10px"
					>
						{timeFormat('%b %Y')(x)}
					</text>
				</g>
			{/each}
		</g>

		<g transform="translate({margin.left},{margin.top})">
			<path d={path(dataFilled.filter(path.defined()))} class="missing" />
			<path d={path(dataFilled)} class="evolution" />
		</g>
		<g transform="translate({margin.left},{margin.top})">
			<g bind:this={brushElement} />
		</g>
	{/if}
</svg>

<style>
	.evolution {
		fill: none;
		stroke: var(--bs-info);
	}

	.missing {
		fill: none;
		stroke: var(--bs-gray);
		stroke-dasharray: 2, 2;
	}

	.selectedDay {
		stroke: var(--bs-secondary);
	}
</style>
