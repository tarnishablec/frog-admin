<template>
	<div id="texture-dashboard">
		<fr-table :data="textureMachineList" :columns="columns"  index ellipsis>
			<el-table-column prop="status" label="status">
				<template slot-scope="scope">
					{{scope.row.status}}
				</template>
			</el-table-column>
		</fr-table>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureDashboard",
		data(){
			return{
				columns:['MachineID','MachineName','MachineCode','WorkCellTypeID','WorkCellID','recipe']
			}
		},
		asyncComputed: {
			async textureMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: 'BT',
				})).data;
			}
		}
	}
</script>

<style scoped>

</style>
