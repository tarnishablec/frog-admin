<template>
	<el-date-picker v-model="date" type="datetimerange" :picker-options="pickerOptions"/>
</template>

<script>
	export default {
		name: "dateTimePicker",
		methods: {
			dateChange() {
				this.$emit('dateChange', this.date);
			}
		},
		data() {
			return {
				date: [new Date() - 3600 * 1000 * 8, new Date().getTime()],
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
