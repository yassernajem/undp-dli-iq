<script>
	import { Collapse, NavbarToggler } from 'sveltestrap';
	import { base } from '$app/paths';
	import undpLogo from '$lib/assets/undp_logo.png';
	export let section;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

<nav class="navbar navbar-expand-md sticky-top navbar-light bg-white shadow-sm">
	<div class="container-fluid">
		<a class="navbar-brand" sveltekit:prefetch href={base + '/'}>
			<img src={undpLogo} class="me-3" alt="UNDP logo" width="auto" height="50" />
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
						download
						class="btn btn-sm rounded-pill btn-outline-primary"
						role="button">About the project</a
					>
				</li>
			</ul>
		</Collapse>

		<!-- </div> -->
	</div>
</nav>
