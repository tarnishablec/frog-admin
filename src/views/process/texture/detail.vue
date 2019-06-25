<template>
	<div>
		<el-card>
			<div slot="header">
				Data Detail
			</div>
			<v-scroll>
				<table>
					<tr id="texture-detail-header">
						<td v-for="i in 14">
							<span>{{i}}</span>
							<br/>
							<span>{{headerList[i-1]}}</span>
						</td>
					</tr>
					<tr>
						<td class="detail-column-header"><span>Actual</span></td>
						<td v-for="i in 13"><span class="actual-temp" @click="showHistory">{{machineState['temperature_tank_'+(i+1)]}}</span>
						</td>
					</tr>
					<tr>
						<td class="detail-column-header"><span>Set</span></td>
						<td v-for="i in 13"><span>{{machineState['temperature_tank_set_'+(i+1)]}}</span></td>
					</tr>
					<tr>
						<td class="detail-column-header"><span>Set Time</span></td>
						<td v-for="i in 13" :key="i"></td>
					</tr>
					<tr>
						<td class="detail-column-header"><span>Used Time</span></td>
						<td v-for="i in 13" :key="i"></td>
					</tr>
				</table>
			</v-scroll>
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
	import * as common from '@/api/process/common'

	export default {
		name: "textureMachineDetail",
		data() {
			return {
				headerList: ['Start Position', 'SDR', 'PSC1', 'Rinse', 'Texture', 'Rinse', 'Texture', 'PSC1', 'Rinse', 'HT/HCL clean', 'HV-Dryer', 'WAD', 'WAD', 'End position'],
				tankList: [2, 3, 5, 7, 8, 11, 12, 13],
				machineState: {},
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
			}
		},
		mounted() {
			common.getMachineInfoFromCommon({
				workCellCode: 'BT',
				machineId: this.$routeState.process.texture.detail.machineId,
			}).then(res => {
				this.machineState = res.data.parameter;
			})
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
		padding-bottom: 1rem;

		.detail-column-header {
			background-color: #cacaca;
		}

		tr:not(#texture-detail-header) {
			td:not(.detail-column-header) {
				span.actual-temp {
					margin: 0;
					display: block;
					height: 100%;

					&:hover {
						cursor: pointer;
						background-color: #a6a6a6;
					}
				}
			}
		}

		tr {
			&#texture-detail-header {
				td {
					background-color: grey;

					span {
						font-weight: bold;
						margin: 0 2rem;
					}
				}
			}

			td {
				text-align: center;

				span {
					white-space: nowrap;
					line-height: 2rem;
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
