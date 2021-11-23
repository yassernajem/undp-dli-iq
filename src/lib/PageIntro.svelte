<script>
	import { base } from '$app/paths';
	import { Icon } from 'sveltestrap';
	export let title;
	export let description;
</script>

<div class="row my-3">
	<div class="col-12">
		<a sveltekit:prefetch href={base + '/'}
			><Icon name="arrow-bar-left" /><span class="ms-1">Home</span></a
		>
	</div>
</div>
<div class="row pb-3 border-bottom border-light">
	<div class="col-md-5">
		<h1>{title}</h1>
	</div>
	<div class="col-md-7">
		<p class="lead">
			{description}
		</p>
	</div>
</div>
