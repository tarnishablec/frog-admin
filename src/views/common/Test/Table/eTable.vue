<template>
	<div>
		<el-table :data="commentData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)">
			<el-table-column v-for="column in columns" :prop="column" :label="column" :key="column" show-overflow-tooltip/>
		</el-table>
		<el-pagination :total="commentData.length" @current-change="currentChange" :page-size.sync="pageSize"/>
	</div>
</template>

<script>
	export default {
		name: "eTable",
		data() {
			return {
				columns: ['postId', 'id', 'name', 'email', 'body'],
				commentData: [],
				currentPage: 1,
				pageSize: 20,
			}
		},
		mounted() {
			this.$axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
				this.commentData = res.data;
			})
		},
		methods: {
			currentChange(currentPage) {
				this.currentPage = currentPage;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
