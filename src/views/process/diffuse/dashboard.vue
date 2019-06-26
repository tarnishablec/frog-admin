<template>
	<div id="diffuse-dashboard" class="grid-dashboard">
		<el-card v-for="machine in diffuseMachineList" :key="machine.MachineID">
			<div slot="header">
				<span class="hover-underline-text" @click="$jumpTo('')">{{machine.MachineName}}</span>
			</div>
			<div>
				<el-table :data="machine.tubeList" class="diffuse-dashboard-table" :cell-class-name="rowStyle">
					<el-table-column v-for="column in columns" align="center" :prop="column" :label="column"
					                 show-overflow-tooltip/>
					<el-table-column prop="status" label="status" align="center" width="65">
						<template slot-scope="scope">
							{{scope.row.status|machineStateFilter}}
						</template>
					</el-table-column>
					<el-table-column label="alarm" align="center" width="60">
						<template slot-scope="scope">
							<fr-icon icon="alert" class="hover-icon"/>
						</template>
					</el-table-column>
					<el-table-column label="lock" align="center" width="60">
						<template slot-scope="scope">
							<fr-icon icon="unlock" class="hover-icon"/>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</el-card>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'
	import {machineStateFilter} from '@/utils/process/processUtils'

	export default {
		name: "diffuseDashboard",
		data() {
			return {
				columns: ['tubeId', 'recipe']
			}
		},
		filters: {
			machineStateFilter,
		},
		methods: {
			rowStyle({row, column}) {
				if (column.label === 'status') {
					if (row.status === 'Productive Time') {
						return 'pt'
					}
					if (row.status === 'Standby Time') {
						return 'st'
					}
				}
			}
		},
		asyncComputed: {
			async diffuseMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: 'DF'
				})).data;
			}
		}
	}
</script>

<style lang="scss">
	#diffuse-dashboard {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;

		.diffuse-dashboard-table {
			.pt {
				color: #fff;
				background-color: green;
			}

			.st {
				color: #fff;
				background-color: red;
			}
		}
	}
</style>
