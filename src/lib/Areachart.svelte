<script>
	import { getContext } from 'svelte';
	import { area, curveStep, scaleLinear, scaleBand, max, extent, format } from 'd3';
	export let data;
	export let width;
	export let height;

	const margin = {
		top: 10,
		right: 10,
		bottom: 20,
		left: 30
	};

	const chartHeight = height - margin.top - margin.bottom;

	$: chartWidth = width - margin.left - margin.right;

	$: xScale = scaleBand()
		.domain(data.map((d) => d.x))
		.range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([0, max(data, (d) => d.y)])
		.range([chartHeight, 0]);

	$: path = area()
		.defined((d) => !isNaN(d.y))
		.x((d) => xScale(d.x))
		.y1((d) => yScale(d.y))
		.y0((d) => yScale(0))
		.curve(curveStep);

	$: yTicks = yScale.ticks(3);
	$: xTicks = [xScale.domain()[0], 0, xScale.domain()[1]];

	const hovered = getContext('hovered');

	function formatHoveredValue(data, id){
		if(id){
			const elm = data.filter(d=>d.x===id)
			return elm[0].y >1?elm[0].y:format('.2')(elm[0].y)
		}else{
			return null
		}
	}
</script>

{#if width && height && data}
	<svg {width} {height}>
		<g transform="translate({margin.left},{margin.top})">
			<path d={path(data)} class="evolution" />
			{#if $hovered}
				<line
					class="selectedDay"
					x1={xScale($hovered)}
					y1="0"
					x2={xScale($hovered)}
					y2={chartHeight}
					line-width={xScale.bandwidth()}
				/>
				<text text-anchor="middle" font-size="10px" font-weight="bold" dominant-baseline="hanging" x={xScale($hovered)} y={chartHeight +5}>
					{formatHoveredValue(data, $hovered)}
				</text>
			{/if}
		</g>
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
						{yScale.domain()[1]>1000?format("~s")(y):y}
					</text>
				</g>
			{/each}
		</g>
	</svg>
{/if}

<style>
	.evolution {
		fill: var(--bs-info);
	}

	.selectedDay {
		stroke: var(--bs-danger);
	}

</style>
