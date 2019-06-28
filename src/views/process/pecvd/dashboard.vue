<template>
	<common-dashboard work-cell-code="PE" :links="['Alarm','Check','Lock']"/>
</template>

<script>
	import CommonDashboard from "@/views/process/components/commonDashboard";
	export default {
		name: "pevcdDashboard",
		components: {CommonDashboard}
	}
</script>

<style scoped>

</style>
