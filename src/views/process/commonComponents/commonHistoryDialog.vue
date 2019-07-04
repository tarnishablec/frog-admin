<template>
	<el-dialog :visible.sync="visible" :title="title" width="85%" append-to-body @close="$emit('update:show',false)">
		<div
				style="display:flex;margin-bottom: 0.8rem;padding: 0 5px;align-items: center;justify-content: space-between;overflow: hidden">
			<div>
				<span style="margin-right: 2rem;padding-left: 1rem">Time:</span>
				<fr-date-time-picker size="small" v-model="date"/>
			</div>
		</div>
		<common-line-chart v-loading="chartLoading" :fields="fields" :source-data="historyData"/>
	</el-dialog>
</template>

<script>
	import CommonLineChart from "@/views/process/commonComponents/commonLineChart";
	import FrDateTimePicker from "@/components/frog-ui/dateTimePicker/dateTimePicker";
	import * as common from '@/api/process/common'
	import {dateToString} from '@/utils/dateUtils'

	export default {
		name: "commonHistoryDialog",
		components: {FrDateTimePicker, CommonLineChart},
		props: {
			show: {
				type: Boolean,
				default: false,
			},
			title: String,
			fields: Array,
			params: Object,
		},
		watch: {
			show() {
				this.visible = this.show;
			}
		},
		data() {
			return {
				date: [new Date(1554048000000), new Date(1554051600000)],
				chartLoading: false,
				visible: this.show,
			}
		},
		asyncComputed: {
			async historyData() {
				if (this.show) {
					this.chartLoading = true;
					let data = (await common.postMachineParameterHisDataFromCommon(
						Object.assign({
							startTime: dateToString(this.date[0]),
							endTime: dateToString(this.date[1]),
							machineId: this.$route.params.machineId
						}, this.params))).data['machineParameterDataList'];
					data ? data.map(d => {
						d.time = new Date(Number(d.time));
					}) : null;
					this.chartLoading = false;
					return data;
				}
			}
		}
	}
</script>

<style scoped>
	.echarts {
		width: 100% !important;
		height: 400px !important;
		margin: auto;
	}

</style>
