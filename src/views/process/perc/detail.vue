<template>
	<common-machine-detail work-cell-code="PR" :tubes="['Tube1', 'Tube2', 'Tube3', 'Tube4']"/>
</template>

<script>
	import commonMachineDetail from "@/views/process/commonComponents/commonMachineDetail";

	export default {
		name: "detail",
		components: {commonMachineDetail}
	}
</script>

<style scoped>

</style>
