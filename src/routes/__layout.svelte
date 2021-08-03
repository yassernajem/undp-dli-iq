<script>
	//import { page, navigating } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import '../app.scss';

	//$: section = $page.path.split('/')[1];
</script>

<Nav />
<slot />
