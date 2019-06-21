<template>
	<div id="texture-dashboard">
		<el-table :data.sync="textureMachineList" :columns="columns" :cell-class-name="rowStyle">
			<el-table-column type="index" align="center" width="80"/>
			<el-table-column align="center" label="MachineName" prop="MachineName" show-overflow-tooltip>
				<template slot-scope="scope">
					<span id="machine-name" @click="$jumpTo('/process/texture/detail',{machineId: scope.row.MachineID})">{{scope.row.MachineName}}</span>
				</template>
			</el-table-column>
			<el-table-column align="center" v-for="column in columns" :key="column" :prop="column" :label="column"
			                 show-overflow-tooltip/>
			<el-table-column align="center">
				<template slot-scope="scope">
					<el-tooltip content="alarm">
						<fr-icon icon="bell"/>
					</el-tooltip>
					<el-tooltip content="point check">
						<fr-icon icon="monitor"/>
					</el-tooltip>
					<el-tooltip content="chemical">
						<fr-icon icon="experiment"/>
					</el-tooltip>
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
	.el-table {
		#machine-name {
			text-decoration: underline #2a2a32;
			cursor: pointer;

			&:hover {
				color: #4c8cf5;
				text-decoration: underline #4c8cf5;
			}
		}

		.pt {
			border-left: 5px solid green;
		}

		.st {
			border-left: 5px solid red;
		}

		svg {
			margin: 0 0.5rem !important;

			&:hover {
				cursor: pointer;
				color: #4c8cf5;
			}
		}
	}
</style>
