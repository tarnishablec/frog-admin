<template>
	<div class="common-dashboard grid-dashboard">
		<el-card v-for="machine in commonMachineList" :key="machine.MachineID">
			<div slot="header">
				<span class="hover-underline-text" @click="$jumpTo(`/process/etch/detail/${machine.MachineID}`)">{{machine.MachineName}}</span>
			</div>
			<div>
				<el-table :data="machine.recipeData" :span-method="spanMethod" :cell-class-name="cellClass">
					<el-table-column prop="recipeName" label="recipeName" align="center" show-overflow-tooltip/>
					<el-table-column prop="recipeValue" label="recipeValue" align="center" show-overflow-tooltip/>
					<el-table-column prop="status" label="status" width="60" show-overflow-tooltip align="center">
						<template slot-scope="scope">
							{{scope.row.status|machineStateFilter}}
						</template>
					</el-table-column>
					<el-table-column label="Alarm" align="center" width="50">
						<template slot-scope="scope">
							<fr-icon icon="alert" class="hover-icon"
							         @click.native="$jumpTo(`/process/etch/alarm/${machine.MachineID}`)"/>
						</template>
					</el-table-column>
					<el-table-column label="Check" align="center" width="50">
						<template slot-scope="scope">
							<fr-icon icon="monitor" class="hover-icon"
							         @click.native="$jumpTo(`/process/etch/pointCheck/${machine.MachineID}`)"/>
						</template>
					</el-table-column>
					<el-table-column label="Chem" align="center" width="50">
						<template slot-scope="scope">
							<fr-icon icon="experiment" class="hover-icon"
							         @click.native="$jumpTo(`/process/etch/Chemical/${machine.MachineID}`)"/>
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
		name: "etchDashboard",
		asyncComputed: {
			async commonMachineList() {
				let temp = (await common.getMachineListByCodeFromCommon({
					workCellCode: 'HF',
				})).data;
				temp.forEach(t => {
					t.recipeData.forEach(r => {
						r.status = t.status;
					})
				});
				return temp;
			}
		},
		filters: {
			machineStateFilter,
		},
		methods: {
			spanMethod({column, rowIndex}) {
				if (column.label === 'status') {
					if (rowIndex % 4 === 0) {
						return [4, 1];
					} else {
						return [0, 0];
					}
				}
			},
			cellClass({row, column}) {
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
	}
</script>

<style scoped>

</style>
