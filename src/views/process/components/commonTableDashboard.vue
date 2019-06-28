<template>
	<div class="common-table-dashboard">
		<el-table :data="textureMachineList" :cell-class-name="cellClass" :height="tableHeight">
			<el-table-column type="index" align="center" width="80"/>
			<el-table-column align="center" label="MachineName" prop="MachineName" show-overflow-tooltip>
				<template slot-scope="scope">
					<span class="hover-underline-text" @click="$jumpTo(`/process/texture/detail/${scope.row.MachineID}`)">{{scope.row.MachineName}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" v-for="column in columns" :key="column" :prop="column" :label="column"
			                 show-overflow-tooltip/>
			<el-table-column align="center" width="200">
				<template slot-scope="scope">
					<div id="operator">
						<el-tooltip content="alarm" v-if="links.has('Alarm')">
							<fr-icon icon="bell" @click.native="$jumpTo(`${path}/alarm/${scope.row.MachineID}`)"/>
						</el-tooltip>
						<el-tooltip content="point check" v-if="links.has('Check')">
							<fr-icon icon="monitor" @click.native="$jumpTo(`${path}/pointCheck/${scope.row.MachineID}`)"/>
						</el-tooltip>
						<el-tooltip content="chemical" v-if="links.has('Chem')">
							<fr-icon icon="experiment" @click.native="$jumpTo(`${path}/chemical/${scope.row.MachineID}`)"/>
						</el-tooltip>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'
	import {tableStyleByStatus, codeToPath} from '@/views/process/mixins'

	export default {
		name: "commonTableDashboard",
		mixins: [tableStyleByStatus, codeToPath],
		data() {
			return {
				tableHeight: 0,
			}
		},
		props: {
			workCellCode: {
				type: String,
				required: true,
			},
			columns: {
				type: Array,
				default: () => {
					return ['MachineCode', 'WorkCellID', 'recipe', 'status']
				}
			},
			links: {
				type: Array,
				default: () => {
					return ['Alarm', 'Check', 'Chem']
				}
			}
		},
		asyncComputed: {
			async textureMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: this.workCellCode,
				})).data;
			}
		},
		mounted() {
			this.tableHeight = window.innerHeight - 100;
		}
	}
</script>

<style scoped>

</style>
