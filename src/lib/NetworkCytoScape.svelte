<script>
	import cytoscape from 'cytoscape';
	import { getContext } from 'svelte';
	import { onMount, afterUpdate, onDestroy } from 'svelte';
	import{scaleLinear, extent} from "d3";

	export let data;
	let container;
	let cy;

	const hovered = getContext('hovered');
	$: cyElements = makeNetwork(data);


	function makeNetwork(data){
		const nodes = data.nodes.map(d=>{
			return {
			group: 'nodes',
			data: d,
			position: { x: d.x, y: d.y },
			locked: true,
			grabbable: false,
			selectable: false,
			pannable: true
		};
		})

		const edgesScale = scaleLinear().domain(extent(data.edges,d=>d.size)).range([1,10])
		const edges = data.edges.map(d=>{
			return {
			group: 'edges',
			data: {...d, size:edgesScale(d.size)},
			locked: true,
			grabbable: false,
			selectable: false
		};
		})

		return [...nodes, ...edges]

	}

	onMount(async () => {
		cy = cytoscape({
			container: container, // container to render in
			elements: cyElements,
			layout: {
				name: 'preset',
				fit: true
			},
			minZoom: 0.1,
			maxZoom: 2,
			userZoomingEnabled: true,
			boxSelectionEnabled: false,

			style: [
				{
					selector: 'node',
					style: {
						label: 'data(id)',
						width: 'data(size)',
						height: 'data(size)',
						'border-width': 1,
						'border-color': '#fff',
						//'overlay-color': '#fff'
						'text-outline-color': '#fff',
						'text-outline-width': 1
					}
				},
				{
					selector: 'node.highlight',
					style: {
						'background-color': '#0dcaf0'
					}
				},
				{
					selector: 'node.semitransp',
					style: { opacity: 0.2 }
				},
				{
					selector: 'edge',
					style: {
						width: 'data(size)',
						'line-color': '#ccc',
						opacity: 0.5
					}
				},
				{
					selector: 'edge.semitransp',
					style: { opacity: 0.2 }
				},
				{
					selector: 'core',
					style: {
						'active-bg-size': 0
					}
				}
			]
		});
		cy.on('tap', 'node', function (evt) {

		});
		cy.on('mouseover', 'node', function (e) {
			const node = e.target;
			const id = node.id();
			hovered.set(id);
			// cy.elements()
			// 	.difference(sel.outgoers().union(sel.incomers()))
			// 	.not(sel)
			// 	.addClass('semitransp');
			node.addClass('highlight'); //.outgoers().union(sel.incomers()).addClass('highlight');
		});
		cy.on('mouseout', 'node', function (e) {
			var node = e.target;
			hovered.set(null);
			//cy.elements().removeClass('semitransp');
			node.removeClass('highlight'); //.outgoers().union(sel.incomers()).removeClass('highlight');
		});

	});

	afterUpdate(() => {
		cy.elements().remove()
		cy.json({elements:cyElements})
		cy.fit()
	});

	onDestroy(() => {
		if(cy){
			cy.destroy()
		}
	});

</script>

<div class="w-100 h-100" bind:this={container} />
