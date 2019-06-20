<template>
	<div id="texture-dashboard">
		<el-table :data.sync="textureMachineList" :columns="columns">
			<el-table-column type="index"/>
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column" show-overflow-tooltip/>
			<el-table-column prop="status" label="status">
				<template v-slot="{row}">
					<div>
						<span>{{row.status}}</span>
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
				columns: ['MachineID', 'MachineName', 'MachineCode', 'WorkCellTypeID', 'WorkCellID', 'recipe']
			}
		},
		asyncComputed: {
			async textureMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: 'BT',
				})).data;
			}
		},
	}
</script>

<style lang="scss">

</style>
