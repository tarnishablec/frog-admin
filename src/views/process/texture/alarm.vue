<template>
	<common-alarm title="Texture Alarm">
		<el-table :data="[]">

		</el-table>
	</common-alarm>
</template>

<script>

	import CommonAlarm from "@/views/process/commonComponents/commonAlarm";

	export default {
		name: "textureAlarm",
		components: {CommonAlarm},
	}
</script>

<style lang="scss" scoped>

</style>
