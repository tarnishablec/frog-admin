<template>
	<common-table-dashboard work-cell-code="PT" :columns="['MachineCode', 'WorkCellID','MachinePosition', 'status']"/>
</template>

<script>
	import CommonTableDashboard from "@/views/process/components/commonTableDashboard";

	export default {
		name: "dashboard",
		components: {CommonTableDashboard},
	}
</script>

<style scoped>

</style>
