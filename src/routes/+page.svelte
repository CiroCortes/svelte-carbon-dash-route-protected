<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import 'carbon-components-svelte/css/g90.css';
	import { BarChartSimple } from '@carbon/charts-svelte';
	import type { BarChartOptions, ScaleTypes } from '@carbon/charts/interfaces';
	import chartjs from 'chart.js/auto';
	import { Grid } from 'carbon-components-svelte';
	import { fade } from 'svelte/transition';
	import { user } from './stores/store';
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';

	onMount(()=>{
		if(!$user){
			console.log("user no existe")
		
		navigate("/login",{replace:true})

	}

	})

	const options: BarChartOptions = {
		title: 'Total llamados ',
		height: '400px',
		width: '500px',
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: 'labels' as ScaleTypes.LABELS }
		}
	};

	let ctx;
	let chartCanvas;

	let datas = '';

	onMount(async () => {
		ctx = chartCanvas.getContext('2d');
		var chart = new chartjs(ctx, {
			type: 'doughnut',

			data: {
				labels: ['Buzon', 'Concretado', 'No le Interesa'],

				datasets: [
					{
						label: '% Tipo de Llamado',

						data: [25, 35, 40],
						backgroundColor: ['rgba(138,63,252,1)', 'rgba(8,189,186,1)', 'rgba(255, 126,182,1)']
					}
				]
			},
			options: {
				responsive: true
			}
		});
	});
</script>

<Grid>
	<div class="contenedor-graph">
		<div in:fade>
			<BarChartSimple
				theme="g90"
				data={[
					{ group: 'Lunes', value: 65000 },
					{ group: 'Martes', value: 29123 },
					{ group: 'Miercoles', value: 35213 },
					{ group: 'Jueves', value: 51213 },
					{ group: 'Viernes', value: 16932 }
				]}
				{options}
			/>
		</div>

		<div in:fade>
			<canvas bind:this={chartCanvas} id="myChart" width="400" height="300" />
		</div>
	</div>
</Grid>

<style>
	.contenedor-graph {
		margin-left: 10vw;
		display: flex;
		gap: 150px;
	}
</style>
