<template>
	<common-table-dashboard work-cell-code="PT" :columns="['MachineCode', 'WorkCellID','MachinePosition', 'status']"
	                        :height="maxHeight"/>
</template>

<script>
	import CommonTableDashboard from "@/views/process/components/commonTableDashboard";

	export default {
		name: "dashboard",
		components: {CommonTableDashboard},
		data() {
			return {
				maxHeight: window.innerHeight - 100,
			}
		},
	}
</script>

<style scoped>

</style>
