<template>
	<div id="texture-dashboard">
		<el-table :data.sync="textureMachineList" :columns="columns" :cell-class-name="rowStyle">
			<el-table-column type="index"/>
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column" show-overflow-tooltip/>
		</el-table>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureDashboard",
		data() {
			return {
				columns: ['MachineID', 'MachineName', 'MachineCode', 'WorkCellTypeID', 'WorkCellID', 'recipe', 'status']
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
				if (column.label === 'status') {
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
	.el-table .pt {
		border-right: 4px solid green;
	}

	.el-table .st {
		border-right: 4px solid red;
	}
</style>
