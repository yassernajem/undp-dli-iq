<script>
	import { tweened, spring } from 'svelte/motion';
	import * as eases from 'svelte/easing';
	// import { interpolate } from 'flubber';
	import * as d3 from 'd3';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	export let data;
	export let fill;
	let el;

	const area = d3
		.area()
		.x((d) => d.x)
		.y0((d) => d.y)
		.y1((d) => d.y1);

	onMount(() => {
		d3.select(el).transition().attr('d', area(data));
		// console.log(el);
		return () => d3.select(el).interrupt();
	});

	afterUpdate(() => {
		//console.log(data);
		d3.select(el).transition().attr('d', area(data));
	});

	// const test = tweened(undefined, {
	// 	interpolate,
	// 	easing: eases.cubicInOut,
	// 	duration: 1000
	// });
	// $: test.set(data);
	//console.log(data.length);

	// const shape = tweened(undefined, {
	// 	interpolate,
	// 	easing: eases.cubicInOut,
	// 	duration: 1000
	// });

	// $: shape = area($test);
	// $: console.log(shape);
</script>

{#if data}
	<path bind:this={el} {fill} />
{/if}
