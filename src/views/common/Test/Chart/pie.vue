<template>
	<div style="text-align: center">
		<v-chart :height="height" :data="data" :scale="scale" :padding="padding">
			<v-tooltip :showTitle="false" dataKey="item*percent"/>
			<v-axis/>
			<v-legend dataKey="item"/>
			<v-pie
					position="percent"
					color="item"
					:vStyle="pieStyle"
					:label="labelConfig"
			/>
			<v-coord type="theta"/>
		</v-chart>
	</div>
</template>

<script>
	const DataSet = require('@antv/data-set');

	const sourceData = [
		{item: '事例一', count: 40},
		{item: '事例二', count: 21},
		{item: '事例三', count: 17},
		{item: '事例四', count: 13},
		{item: '事例五', count: 9}
	];

	const scale = [{
		dataKey: 'percent',
		min: 0,
		formatter: '.0%',
	}];

	const dv = new DataSet.View().source(sourceData);
	dv.transform({
		type: 'percent',
		field: 'count',
		dimension: 'item',
		as: 'percent'
	});
	const data = dv.rows;

	export default {
		name: 'pieTem',
		data() {
			return {
				data,
				scale,
				height: 400,
				pieStyle: {
					stroke: "#fff",
					lineWidth: 1
				},
				padding: [50, 50, 70, 50],
				labelConfig: ['percent', {
					offset: -40,
					textStyle: {
						rotate: 0,
						textAlign: 'center',
						shadowBlur: 2,
						shadowColor: 'rgba(0, 0, 0, .45)'
					}
				}],
			};
		}
	};
</script>
