<script>
	import { Collapse, NavbarToggler } from 'sveltestrap';
	import { base } from '$app/paths';
	import undpLogo from '$lib/assets/UNDP_logo.svg';
	export let section;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<nav class="navbar navbar-expand-md sticky-top navbar-light bg-white shadow-sm">
	<div class="container-fluid">
		<a class="navbar-brand logo" sveltekit:prefetch href={base + '/'}>
			<div class="bg-white border border-white">
				<img src={undpLogo} alt="UNDP logo" width="auto" height="100" />
			</div>
		</a>
		<!-- <button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button> -->
		<NavbarToggler on:click={toggle} />
		<!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
		<Collapse {isOpen} navbar expand="md">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
				<li class="nav-item">
					<a
						href={base + '/about'}
						class="btn btn-sm rounded-pill btn-outline-primary"
						role="button">About the project</a
					>
				</li>
			</ul>
		</Collapse>

		<!-- </div> -->
	</div>
</nav>

<style>
	.logo {
		max-height: 60px;
		overflow: visible;
	}
</style>
