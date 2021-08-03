<script>
	import { line, curveStep, scaleLinear, max, extent, format } from 'd3';
	export let data;
	export let day;
	const height = 100;
	const width = 230;
	const margin = {
		top: 10,
		right: 10,
		bottom: 20,
		left: 30
	};

	const chartHeight = height - margin.top - margin.bottom;

	$: chartWidth = width - margin.left - margin.right;

	$: xScale = scaleLinear()
		.domain(extent(data, (d) => d.x))
		.range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([0, max(data, (d) => d.y)])
		.range([chartHeight, 0]);

	let path = line()
		.defined((d) => !isNaN(d.y))
		.x((d) => xScale(d.x))
		.y((d) => yScale(d.y))
		.curve(curveStep);

	$: yTicks = yScale.ticks(3);
	$: xTicks = [xScale.domain()[0], 0, xScale.domain()[1]];
</script>

<svg {width} {height}>
	<g transform="translate({margin.left}, {margin.top})">
		{#each yTicks as y}
			<g class="tick" opacity="1" transform="translate(0,{yScale(y)})">
				<line stroke="#DEE2E6" x2={chartWidth} />
				<text
					dominant-baseline="middle"
					text-anchor="end"
					fill="currentColor"
					x="-3"
					font-size="10px"
				>
					{y}
				</text>
			</g>
		{/each}
	</g>

	<g transform="translate({margin.left}, {chartHeight + margin.top})">
		{#each xTicks as x}
			<g transform="translate({xScale(x)},0)">
				<text
					dominant-baseline="hanging"
					fill="currentColor"
					text-anchor="middle"
					y={6}
					font-size="10px"
				>
					{x ? format('+')(x) : x}
				</text>
			</g>
		{/each}
	</g>

	<g transform="translate({margin.left},{margin.top})">
		<path d={path(data)} class="evolution" />
		<line
			class="selectedDay"
			stroke-dasharray="3"
			x1={xScale(day)}
			y1="0"
			x2={xScale(day)}
			y2={chartHeight}
		/>
	</g>
</svg>

<style>
	.evolution {
		fill: none;
		stroke: var(--bs-info);
	}

	.selectedDay {
		stroke: var(--bs-secondary);
	}
</style>
