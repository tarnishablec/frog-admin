<template>
	<div id="texture-dashboard">
		<el-table :data="textureMachineList" :cell-class-name="rowStyle" id="texture-dashboard-table">
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
						<el-tooltip content="alarm">
							<fr-icon icon="bell" @click.native="$jumpTo('/process/texture/alarm')"/>
						</el-tooltip>
						<el-tooltip content="point check">
							<fr-icon icon="monitor" @click.native="$jumpTo('/process/texture/pointCheck')"/>
						</el-tooltip>
						<el-tooltip content="chemical">
							<fr-icon icon="experiment" @click.native="$jumpTo('/process/texture/chemical')"/>
						</el-tooltip>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureDashboard",

		data() {
			return {
				columns: ['MachineCode', 'WorkCellID', 'recipe', 'status'],

			}
		},
		asyncComputed: {
			async textureMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: 'BT',
				})).data;
			}
		},
		methods: {
			rowStyle({row, column}) {
				if (column.type === 'index') {
					if (row.status === 'Productive Time') {
						return 'pt'
					}
					if (row.status === 'Standby Time') {
						return 'st'
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	#texture-dashboard-table {
		.pt {
			border-left: 5px solid green;
		}

		.st {
			border-left: 5px solid red;
		}

		svg {
			&:hover {
				cursor: pointer;
				color: #4c8cf5;
			}
		}

		#operator {
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-evenly;
		}
	}
</style>
