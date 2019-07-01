<template>
	<common-dashboard :data="etchMachineList" work-cell-code="HF" :columns="['recipeData','recipeName','recipeValue']" :span-method="spanMethod"/>
</template>

<script>
	import * as common from '@/api/process/common'
	import CommonDashboard from "@/views/process/commonComponents/commonDashboard";

	export default {
		name: "etchDashboard",
		components: {CommonDashboard},
		asyncComputed: {
			async etchMachineList() {
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
		},
	}
</script>

<style scoped>

</style>
