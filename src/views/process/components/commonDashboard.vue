<template>
	<div class="common-dashboard grid-dashboard">
		<el-card v-for="machine in commonMachineList" :key="machine.MachineID">
			<div slot="header">
				<span class="hover-underline-text" @click="$jumpTo(`${path}/detail/${machine.MachineID}`)">{{machine.MachineName}}</span>
			</div>
			<div>
				<el-table :data="machine[columns[0]]" class="common-dashboard-table" :cell-class-name="cellClass"
				          :span-method="spanMethod"
				          row-key="MachineID">
					<el-table-column v-for="column in columns.removeFirst()" align="center" :prop="column" :label="column"
					                 :key="column"
					                 show-overflow-tooltip/>
					<el-table-column v-if="hasStatus" prop="status" label="status" align="center" width="60">
						<template slot-scope="scope">
							{{scope.row.status|machineStateFilter}}
						</template>
					</el-table-column>
					<el-table-column align="center" width="40" v-if="links.has('Alarm')">
						<template slot-scope="scope">
							<fr-icon icon="alert" class="hover-icon"
							         @click.native="$jumpTo(`${path}/alarm/${machine.MachineID}`)"/>
						</template>
					</el-table-column>
					<el-table-column align="center" width="40" v-if="links.has('Check')">
						<template slot-scope="scope">
							<fr-icon icon="monitor" class="hover-icon"
							         @click.native="$jumpTo(`${path}/pointCheck/${machine.MachineID}`)"/>
						</template>
					</el-table-column>
					<el-table-column align="center" width="40" v-if="links.has('Chem')">
						<template slot-scope="scope">
							<fr-icon icon="experiment" class="hover-icon"
							         @click.native="$jumpTo(`${path}/Chemical/${machine.MachineID}`)"/>
						</template>
					</el-table-column>
					<el-table-column align="center" width="40" v-if="links.has('Lock')">
						<template slot-scope="scope">
							<fr-icon icon="unlock-fill"/>
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
	import {gridStyleByStatus, codeToPath} from '@/views/process/mixins'

	export default {
		name: "commonDashboard",
		mixins: [gridStyleByStatus, codeToPath],
		props: {
			workCellCode: {
				type: String,
				required: true,
			},
			columns: {
				type: Array,
				default: () => {
					return ['tubeList', 'tubeId', 'recipe']
				}
			},
			hasStatus: {
				type: Boolean,
				default: true,
			},
			data: {},
			spanMethod: {},
			links: {
				type: Array,
				default: () => {
					return ['Alarm', 'Check', 'Chem']
				}
			},
		},
		asyncComputed: {
			async commonMachineList() {
				return this.data ? this.data : (await common.getMachineListByCodeFromCommon({
					workCellCode: this.workCellCode,
				})).data;
			}
		},
		filters: {
			machineStateFilter,
		},
	}
</script>

<style scoped>

</style>
