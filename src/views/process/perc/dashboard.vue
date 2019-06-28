<template>
	<common-dashboard work-cell-code="PR" :links="['Alarm','Check','Lock']"/>
</template>

<script>
	import CommonDashboard from "@/views/process/components/commonDashboard";

	export default {
		name: "dashboard",
		components: {CommonDashboard}
	}
</script>

<style scoped>

</style>
