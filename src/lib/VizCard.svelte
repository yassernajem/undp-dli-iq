<script>
	import { base } from '$app/paths';
	export let title;
	export let route;
	export let thumb_path;
	export let thumb;
	export let number;

	function padding(number) {
		return number.toString().padStart(2, '0');
	}
</script>

<div
	class="viz-card p-4 d-flex flex-column w-100 justify-content-between border rounded-3"
	style="background-image: url('{thumb_path}')"
>
	<div>
		<h6 class="text-danger">{padding(number + 1)}.</h6>
		<h4>{title}</h4>
	</div>
	<div class="align-self-end">
		<a sveltekit:prefetch href={base + route} class="btn btn-primary rounded-pill" role="button"
			>Discover</a
		>
	</div>
</div>

<style>
	.viz-card {
		min-height: 400px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
</style>
