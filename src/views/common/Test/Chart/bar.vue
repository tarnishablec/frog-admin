<template>
	<div style="width: 50%">
		<v-chart :forceFit="true" :height="height" :data="data" :padding="padding">
			<v-coord type="rect" direction="LT"/>
			<v-tooltip/>
			<v-legend/>
			<v-axis dataKey="value" position="right"/>
			<v-axis dataKey="label" :label="label"/>
			<v-bar position="label*value" color="type" :adjust="adjust"/>
		</v-chart>
	</div>
</template>

<script>
	const DataSet = require('@antv/data-set');

	const sourceData = [
		{label: 'Mon.', series1: 2800, series2: 2260},
		{label: 'Tues.', series1: 1800, series2: 1300},
		{label: 'Wed.', series1: 950, series2: 900},
		{label: 'Thur.', series1: 500, series2: 390},
		{label: 'Fri.', series1: 170, series2: 100},
	];

	const dv = new DataSet.View().source(sourceData);
	dv.transform({
		type: 'fold',
		fields: ['series1', 'series2'],
		key: 'type',
		value: 'value',
	});
	const data = dv.rows;

	const label = {offset: 12};
	const adjust = [{type: 'dodge', marginRatio: 1 / 32}];

	export default {
		name: 'barTem',
		data() {
			return {
				data,
				height: 400,
				label: label,
				adjust: adjust,
				padding: [50, 50, 70, 50],
			};
		}
	};
</script>
