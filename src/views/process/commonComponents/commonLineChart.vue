<template>
	<v-chart :options="options" autoresize/>
</template>

<script>
	export default {
		name: "commonLineChart",
		props: {
			sourceData: Array,
			fields: Array,
			title: String,
		},
		computed: {
			options() {
				return {
					legend: {
						data: this.fields.removeFirst(),
					},
					title: {
						text: this.title,
					},
					tooltip: {
						trigger: 'axis',
					},
					dataset: {
						source: this.sourceData ? this.sourceData : [],
					},
					toolbox: {
						right: 20,
						itemSize: 20,
						feature: {
							saveAsImage: {
								title: ' '
							},
						}
					},
					xAxis: {type: 'time'},
					yAxis: {
						min: 'dataMin',
						max: 'dataMax',
					},
					series: (() => {
						let s = [];
						this.fields.removeFirst().forEach(f => {
							s.push({
								name: f,
								type: 'line',
							})
						});
						return s;
					})(),
				}
			}
		}
	}
</script>

<style scoped>

</style>
