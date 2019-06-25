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
						<td v-for="i in 13"><span class="actual-temp" @click="">{{machineState['temperature_tank_'+(i+1)]}}</span>
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
				<div>
					Time: <el-date-picker v-model="comparisonTime" type="datetimerange"/>
					Machines: <el-select value=""/>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureMachineDetail",
		data() {
			return {
				headerList: ['Start Position', 'SDR', 'PSC1', 'Rinse', 'Texture', 'Rinse', 'Texture', 'PSC1', 'Rinse', 'HT/HCL clean', 'HV-Dryer', 'WAD', 'WAD', 'End position'],
				machineState: {},
				comparisonTime: [new Date(), new Date()],
			}
		},
		mounted() {
			common.getMachineInfoFromCommon({
				workCellCode: 'BT',
				machineId: this.$routeState.process.texture.detail.machineId,
			}).then(res => {
				this.machineState = res.data.parameter;
			})
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

</style>
