<script>
	import { Popover } from 'sveltestrap';
	import Pack from './pack.js';
	import Circle from '$lib/circlepack/Circle.svelte';
	import Linechart from '$lib/Linechart.svelte';
	import hash from 'object-hash';
	export let data;
	export let width;
	export let height;
	export let day;

	$: circles = Pack(data, width, height);

	function getScaleFactor(circles, width, height, pad = 0) {
		const x0 = circles.reduce((v, { x, r }) => Math.min(v, x - r - pad), +Infinity);
		const x1 = circles.reduce((v, { x, r }) => Math.max(v, x + r + pad), -Infinity);
		const y0 = circles.reduce((v, { y, r }) => Math.min(v, y - r - pad), +Infinity);
		const y1 = circles.reduce((v, { y, r }) => Math.max(v, y + r + pad), -Infinity);

		return Math.max((x1 - x0) / width, (y1 - y0) / height);
	}

	$: scaleFactor = getScaleFactor(circles, width, height, 1);
	function makeID(data) {
		return 'c_' + hash(data, { algorithm: 'md5' });
	}
</script>

{#if width && height && circles.length}
	<svg {width} {height}>
		<g>
			{#each circles as circle, index (circle.name)}
				<g
					transform={`translate(${circle.x / scaleFactor + width / 2},${
						circle.y / scaleFactor + height / 2
					})`}
				>
					<Circle id={makeID(circle)} fill="#CED4DA" stroke="white" r={circle.r / scaleFactor} />
					{#if circle.name.length * 4 < circle.r / scaleFactor}
						<text
							dominant-baseline="middle"
							font-size="12px"
							class="pe-none"
							x={0}
							y={0}
							text-anchor="middle">{circle.name}</text
						>
					{/if}
				</g>
			{/each}
		</g>
	</svg>
	{#each circles as circle, index (circle.name)}
		<Popover target={makeID(circle)} title={circle.name} trigger="hover" placement="right">
			<Linechart data={circle.series} {day} />
		</Popover>
	{/each}
{/if}
