<script>
	import { scaleLinear, max, format } from 'd3';
	export let data;
	export let areaHeight;
	export let areaHeightMargin;
	export let chartWidth;
	export let yDataMax;
	export let scaleType;

	$: yMax = scaleType === 'Same scale' ? yDataMax : max(data, (d) => d.value);

	$: yScale = scaleLinear().domain([0, yMax]).range([areaHeight, areaHeightMargin]);

	$: yTicks = yScale.ticks(3);
</script>

<g transform="translate(0,0)">
	{#each yTicks as y}
		<g class="tick" opacity="1" transform="translate(0,{yScale(y)})">
			<line stroke="#DEE2E6" x2={chartWidth} stroke-dasharray={'3,3'} />
			{#if y > 0}
				<text
					dominant-baseline="middle"
					text-anchor="end"
					fill="currentColor"
					x="-3"
					font-size="10px"
				>
					{format('~s')(y)}
				</text>
			{/if}
		</g>
	{/each}
</g>
