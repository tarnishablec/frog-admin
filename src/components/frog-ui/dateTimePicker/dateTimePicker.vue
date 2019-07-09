<template>
	<el-date-picker v-bind="$attrs" v-model="tDates" type="datetimerange" :picker-options="pickerOptions"
	                @change="$emit('change',tDates)"/>
</template>

<script>
	export default {
		name: "frDateTimePicker",
		model: {
			prop: 'dates',
			event: 'change',
		},
		props: ['dates'],
		data() {
			return {
				tDates: this.dates,
				pickerOptions: {
					shortcuts: [{
						text: 'Last 8 Hours',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 8);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: 'Last 12 Hours',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 12);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: 'Last 24 Hours',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
			}
		}
	}
</script>

<style scoped>

</style>
