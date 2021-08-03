<script>
	export let sections;
</script>

{#each sections as section}
	<div class="row my-3 border-bottom border-light">
		{#if section.title}
			<div class="col-12 col-md-4">
				<h3>{section.title}</h3>
				<p>{section.description}</p>
			</div>
		{/if}

		<div class={`col-12 col-md-${section.title ? '8' : '12'}`}>
			<div class="d-flex justify-content-center">
				<img class="img-fluid" src={section.img_path.default} alt={section.title} />
			</div>
		</div>
	</div>
{/each}
