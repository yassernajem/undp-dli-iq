<script>
	import { base } from '$app/paths';
	import { Icon } from 'sveltestrap';
	export let title = 'My mock title super good';
	export let description =
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.';
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
