<template>
	<div>
		<fr-table full-load :data="data" ref="table1"
							ellipsis stripe index border selection
							removable editable addable
							@rowChange="changeRow"
							@rowRemove="removedRow"
							@rowAdd="addRow">
			<el-table-column slot="expand" type="expand">
				<template slot-scope="scope">
					{{scope.row.title}}
				</template>
			</el-table-column>
		</fr-table>
		<el-button @click="printSelected" style="margin-right: 20px">Print Selected</el-button>
		<span>=> check in console</span>
	</div>
</template>

<script>
	export default {
		name: "testTable",
		// asyncComputed: {
		// 	async data() {
		// 		return (await this.$axios.get('https://jsonplaceholder.typicode.com/comments')).data;
		// 	},
		// },
		mounted() {
			this.loadComments();
		},
		data() {
			return {
				data: [],
				columns: ['userId', 'id', 'title']
			}
		},
		methods: {
			async loadComments() {
				this.data = (await this.$axios.get('https://jsonplaceholder.typicode.com/comments')).data;
			},
			printSelected() {
				this.$notify({
					type: 'success',
					message: this.$refs.table1.selectedRows,
				})
			},
			changeRow(index, row) {
				this.$message({
					message: `call some update api, ${row.name} is updated`,
					type: 'warning'
				});
				this.loadComments();
				// this.$refs.table1.refresh();
			},
			removedRow(index, row) {
				this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: `call some remove api, ${row.name} is added`
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: 'Delete canceled'
					});
				});
			},
			addRow(index, row) {
				this.$alert({
					type: 'success',
					message: `call some add api, ${row.name} is added`
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
