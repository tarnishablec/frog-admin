<template>
	<div class="common-alarm">
		<el-card>
			<div slot="header">
				{{title}}
			</div>
			<div>
				<div class="alarm-header">
					<div>
						<span>Time:</span>
						<date-time-picker ref="datePicker"/>
					</div>
					<div>
						<el-button @click="search">Search</el-button>
						<json-to-csv-button>Export</json-to-csv-button>
					</div>
				</div>
				<slot/>
			</div>
		</el-card>
	</div>
</template>

<script>
	import JsonToCsvButton from "@/components/excel/jsonToCsvButton";
	import DateTimePicker from "@/components/common/dateTimePicker";

	export default {
		name: "commonAlarm",
		props: {
			title: {
				type: String,
				default: 'Alarm',
			}
		},
		components: {DateTimePicker, JsonToCsvButton},
		data() {
			return {
				alarmTime: [new Date(), new Date()]
			}
		},
		methods: {
			search() {
				console.log(this.$refs.datePicker.date);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.alarm-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			margin-right: 1rem;
		}
	}
</style>
