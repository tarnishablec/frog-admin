<template>
	<common-alarm title="Diffuse Alarm">
		<el-table :data="[]">

		</el-table>
	</common-alarm>
</template>

<script>
	import CommonAlarm from "@/views/process/components/commonAlarm";

	export default {
		name: "diffuseAlarm",
		components: {CommonAlarm}
	}
</script>

<style scoped>

</style>
