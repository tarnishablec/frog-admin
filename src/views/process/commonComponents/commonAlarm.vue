<template>
	<div class="common-alarm">
		<el-card style="margin-bottom: 1.5rem" header="Alarm Count">
			<div class="alarm-header">
				<div>
					<span>Time:</span>
					<fr-date-time-picker size="small" v-model="date"/>
				</div>
			</div>
			<v-chart v-loading="chartLoading" :options="options" autoresize/>
		</el-card>
		<el-card header="Alarm List">
			<el-table v-loading="tableLoading" :data="alarmList" height="500">
				<el-table-column type="index" align="center"/>
				<el-table-column v-for="column in tableColumns" :key="column" :prop="column" :label="column" align="center"/>
			</el-table>
		</el-card>
	</div>
</template>

<script>
	import JsonToCsvButton from "@/components/excel/jsonToCsvButton";
	import frDateTimePicker from "@/components/frog-ui/dateTimePicker/dateTimePicker";
	import {dateToString} from '@/utils/dateUtils'
	import * as common from '@/api/process/common'
	import CommonLineChart from "@/views/process/commonComponents/commonLineChart";

	export default {
		name: "commonAlarm",
		props: {
			workCellCode: {
				type: String,
				required: true,
			},
		},
		components: {CommonLineChart, frDateTimePicker, JsonToCsvButton},
		data() {
			return {
				date: [new Date(1554048000000), new Date(1554102000000)],
				chartLoading: false,
				tableLoading: false,
				tableColumns: ['AlarmID', 'AlarmText', 'Time']
			}
		},
		computed: {
			options() {
				return {
					tooltip: {
						trigger: 'axis',
					},
					legend: {
						data: ['count', 'pareto']
					},
					dataset: {
						source: this.alarmCount ? this.alarmCount : [],
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
					xAxis: {
						type: 'category',
						axisPointer: {
							type: 'shadow'
						}
					},
					yAxis: [
						{
							type: 'value',
							name: 'count',
							max: function (value) {
								return value.max + 10 - (value.max + 10) % 10
							}
						},
						{
							type: 'value',
							name: 'pareto',
							max: 100,
							min: 0,
							axisLabel: {
								formatter: '{value}%'
							}
						},
					],
					series: [
						{
							name: 'count',
							type: 'bar',
						},
						{
							name: 'pareto',
							type: 'line',
							yAxisIndex: 1,
						},
					]
				}
			}
		},
		asyncComputed: {
			async alarmCount() {
				this.chartLoading = true;
				let res = (await common.postAlarmCountFromCommon({
					endTime: dateToString(this.date[1]),
					machineId: this.$route.params.machineId,
					startTime: dateToString(this.date[0]),
					tubeId: "0",
					workCellCode: this.workCellCode,
				})).list;
				let sum = 0;
				res.forEach(r => {
					sum += parseInt(r.count);
				});
				res.reduce((prev, cur) => {
					let temp = prev + parseInt(cur.count);
					cur.pareto = Math.floor((temp) / sum * 100);
					return temp;
				}, 0);
				this.chartLoading = false;
				return res;
			},
			async alarmList() {
				this.tableLoading = true;
				let res = (await common.postAlarmListFromCommon({
					endTime: dateToString(this.date[1]),
					machineId: this.$route.params.machineId,
					startTime: dateToString(this.date[0]),
					tubeId: "0",
					workCellCode: this.workCellCode,
				})).data.rows;
				this.tableLoading = false;
				return res;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alarm-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;

		span {
			margin-right: 1rem;
		}
	}

	.echarts {
		height: 350px !important;
	}

</style>
