<template>
	<div class="process-detail">
		<el-card v-if="machineState">
			<div slot="header" class="detail-status-header">
				<span>Machine Status: </span>
				<div class="status-text" :class="machineState.status.MachineStatus | machineStateFilter">
					{{machineState.status.MachineStatus}}
				</div>
			</div>
			<div style="overflow-x: scroll">
				<table class="common-detail-grid">
					<thead>
					<tr id="texture-detail-header">
						<td v-for="i in 14">
							<span>{{i}}</span>
							<br/>
							<span>{{headerList[i-1]}}</span>
						</td>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td><span>Actual</span></td>
						<td v-for="i in 13" class="actual-temp">
							<span @click="showHistory">
								{{machineState.parameter['temperature_tank_'+(i+1)]}}
							</span>
						</td>
					</tr>
					<tr>
						<td><span>Set</span></td>
						<td v-for="i in 13"><span>{{machineState.parameter['temperature_tank_set_'+(i+1)]}}</span></td>
					</tr>
					<tr>
						<td><span>Time</span></td>
						<td v-for="i in 13" :key="i"></td>
					</tr>
					<tr>
						<td><span>Used Time</span></td>
						<td v-for="i in 13" :key="i"></td>
					</tr>
					</tbody>
				</table>
			</div>
		</el-card>
		<el-card>
			<div slot="header">
				Data Comparison
			</div>
			<div>
				<div class="comparison-header">
					<div>
						<span>Time:</span>
						<el-date-picker v-model="comparisonTime" type="datetimerange"/>
					</div>
					<div>
						<span>Machines:</span>
						<el-select v-model="selectedMachine" multiple collapse-tags :value="selectedMachine">
							<el-option v-for="machine in machineList" :key="machine.MachineID" :label="machine.MachineName"
							           :value="machine.MachineID"/>
						</el-select>
					</div>
					<div>
						<span>Tank Id:</span>
						<el-select v-model="tankId" :value="tankId">
							<el-option v-for="tank in tankList" :key="'temperature_tank_'+tank" :label="'temperature_tank_'+tank"
							           :value="'temperature_tank_'+tank"/>
						</el-select>
					</div>
				</div>
				<div>

				</div>
			</div>
		</el-card>
		<el-dialog :visible.sync="historyDialogVisible" width="80%"
		           :modal-append-to-body='false'>
			<div slot="title"><span>History Data</span>
				<hr/>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {machineStateFilter} from '@/views/process/commonFilters/machineStateFilter'
	import * as common from '@/api/process/common'

	export default {
		name: "textureMachineDetail",
		data() {
			return {
				headerList: ['Start Position', 'SDR', 'PSC1', 'Rinse', 'Texture', 'Rinse', 'Texture', 'PSC1', 'Rinse', 'HT/HCL clean', 'HV-Dryer', 'WAD', 'WAD', 'End position'],
				tankList: [2, 3, 5, 7, 8, 11, 12, 13],
				selectedMachine: [10001],
				tankId: 'temperature_tank_2',
				comparisonTime: [new Date(), new Date()],
				historyDialogVisible: false,
			}
		},
		asyncComputed: {
			async machineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: "BT"
				})).data;
			},
			async machineState() {
				return (await common.getMachineInfoFromCommon({
					workCellCode: 'BT',
					machineId: this.$route.params.machineId,
				})).data;
			}
		},
		filters: {
			machineStateFilter,
		},
		methods: {
			showHistory() {
				this.historyDialogVisible = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	table {
		tr:not(#texture-detail-header) {
			td.actual-temp:not(.detail-column-header) {
				margin: 0;
				height: 100%;

				span {
					&:hover {
						cursor: pointer;
						background-color: #a6a6a6;
					}
				}
			}
		}
	}

	.comparison-header {
		display: flex;

		* {
			span {
				margin-right: 10px;
			}

			margin-right: 1rem;
		}
	}

	.el-card {
		margin-bottom: 1rem;
	}
</style>
