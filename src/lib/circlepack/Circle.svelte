<script>
	// import { tweened } from 'svelte/motion';
	// import * as eases from 'svelte/easing';
	//export let data;
	export let fill;
	export let stroke;
	export let r;
	export let id;

	// const tweenOptions = {
	// 	duration: 300,
	// 	easing: eases.cubicInOut
	// };

	// const rc = tweened(undefined, tweenOptions);

	// $: rc.set(r);
</script>

<circle {id} {fill} {stroke} cx={0} cy={0} {r} />
