<script context="module">
	import { base } from '$app/paths';
	import { dev } from '$app/env';

	export async function load({ page, fetch }) {
		const baseUrl = dev ? page.path : base + page.path;
		const res = await fetch(`${baseUrl}/data.json`);
		const html = await res.json();
		return {
			props: {
				md: html
			}
		};
	}
</script>

<script>
	export let md;
</script>

<div class="container">
	<div class="row py-4 mb-3">
		<div class="col-12 col-md-3">
			<h6 class="text-info">About</h6>
		</div>
		<div class="col-12 col-md-6">
			{@html md.html}
		</div>
	</div>
</div>
