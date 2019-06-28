<template>
	<common-alarm title="Texture Alarm">
		<span slot="header">
			Texture Alarm
		</span>
		<el-table :data="[]">

		</el-table>
	</common-alarm>
</template>

<script>

	import CommonAlarm from "@/views/process/components/commonAlarm";

	export default {
		name: "textureAlarm",
		components: {CommonAlarm},
	}
</script>

<style lang="scss" scoped>

</style>
