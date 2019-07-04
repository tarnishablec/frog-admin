<template>
	<div>
		<el-table :data="data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)">
			<el-table-column type="index" align="=center"/>
			<el-table-column v-for="column in columns" :prop="column" :label="column" :key="column" show-overflow-tooltip align="center"/>
		</el-table>
		<el-pagination :total="data.length" @current-change="currentChange" :page-size.sync="pageSize"/>
	</div>
</template>

<script>
	export default {
		name: "frTable",
		props: {
			index: Boolean,
			data: {
				required: true,
			},
			columns: {
				type: Array,
				required: true,
			},
			pageSize: {
				type: Number,
				default: 20,
			},
		},
		data() {
			return {
				currentPage: 1,
			}
		},
		methods: {
			currentChange(currentPage) {
				this.currentPage = currentPage;
			}
		}
	}
</script>

<style scoped>

</style>
