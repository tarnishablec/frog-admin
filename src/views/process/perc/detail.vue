<template>
	<common-tube-detail work-cell-code="PR" :tubes="['Tube1', 'Tube2', 'Tube3', 'Tube4']"/>
</template>

<script>
	import CommonTubeDetail from "@/views/process/commonComponents/commonTubeDetail";

	export default {
		name: "detail",
		components: {CommonTubeDetail}
	}
</script>

<style scoped>

</style>
