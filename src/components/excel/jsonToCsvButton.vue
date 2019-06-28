<template>
	<el-button :type="type" :size="size" @click="json2excel">
		<slot/>
	</el-button>
</template>

<script>

	export default {
		name: "jsonToCsvButton",
		props: {
			filename: String,
			data: Array,
			size: {
				type: String,
				default: 'normal'
			},
			type: String,
		},
		methods: {
			json2excel() {
				import('@/plugins/xlsx').then(excel => {
					excel.jsonToFile(this.data, this.filename);
				})
			}
		}
	}
</script>

<style scoped>

</style>
