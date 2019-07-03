<template>
	<div class="common-history-chart">
		<div style="display:flex;margin-bottom: 0.8rem;padding: 0 5px;align-items: center;justify-content: space-between">
			<div>
				<span style="margin-right: 2rem">Time:</span>
				<fr-date-time-picker type="datetimerange" size="small" v-model="date"/>
			</div>
		</div>
		<v-chart :options="options" v-loading="chartLoading" autoresize/>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'
	import {dateToString} from '@/utils/dateUtils'
	import frDateTimePicker from "@/components/frog-ui/dateTimePicker/dateTimePicker";

	export default {
		name: "commonHistoryChart",
		components: {frDateTimePicker},
		props: {
			params: {
				required: true,
			},
			fields: Array,
			title: String,
			loading: Boolean,
		},
		data() {
			return {
				chartLoading: false,
				date: [new Date(1554048000000), new Date(1554051600000)],
			}
		},
		asyncComputed: {
			async sourceData() {
				this.chartLoading = true;
				let data = (await common.postMachineParameterHisDataFromCommon({
					startTime: dateToString(this.date[0]),
					endTime: dateToString(this.date[1]),
					machineId: this.params.machineId,
					paramId: this.params.paramId,
					workCellCode: this.params.workCellCode,
				})).data['machineParameterDataList'];
				data.map(d => {
					d.time = new Date(Number(d.time));
				});
				this.chartLoading = false;
				return data;
			},
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
