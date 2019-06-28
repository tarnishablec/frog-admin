<template>
	<common-dashboard work-cell-code="FF" :data="sinteringMachineList" :columns="['recipeData','Lane','recipe']" :links="['Alarm','Check']"/>
</template>

<script>
	import * as common from '@/api/process/common'
	import CommonDashboard from "@/views/process/components/commonDashboard";

	export default {
		name: "sinteringDashboard",
		components: {CommonDashboard},
		asyncComputed: {
			async sinteringMachineList() {
				let temp = (await common.getMachineListByCodeFromCommon({
					workCellCode: 'FF',
				})).data;
				temp.forEach(t => {
					t.recipeData.forEach(r => {
						r.status = t.status;
					})
				});
				return temp;
			}
		},
	}
</script>

<style scoped>

</style>
