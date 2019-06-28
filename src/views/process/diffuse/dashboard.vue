<template>
	<common-dashboard work-cell-code="DF" :links="['Alarm','Lock']"/>
</template>

<script>
	import CommonDashboard from "@/views/process/components/commonDashboard";

	export default {
		name: "diffuseDashboard",
		components: {CommonDashboard},
	}
</script>

<style lang="scss">
</style>
