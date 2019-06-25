<template>
	<el-card>
		<div slot="header">
			History Alarm
		</div>
		<div>
			<div class="alarm-header">
				<div>
					<span>Time:</span>
					<el-date-picker v-model="alarmTime" type="datetimerange"/>
				</div>
				<div>
					<json-to-csv-button data="">export</json-to-csv-button>
				</div>
			</div>

		</div>
	</el-card>
</template>

<script>
	import JsonToCsvButton from "@/components/excel/jsonToCsvButton";
	export default {
		name: "textureAlarm",
		components: {JsonToCsvButton},
		data() {
			return {
				alarmTime: [new Date(), new Date()]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alarm-header {
		display: flex;
		span{
			margin-right: 1rem;
		}
	}
</style>
