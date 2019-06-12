<template>
	<div>
		<fr-table ellipsis full-load stripe index border selection :data="data" ref="table1">
			<el-table-column label="Operations" align="center" width="200">
				<template slot-scope="scope">
					<div>
						<el-button
								size="mini"
								@click="handleEdit(scope.$index, scope.row)">edit
						</el-button>
						<el-button
								size="mini"
								type="danger"
								@click="handleDelete(scope.$index, scope.row)">remove
						</el-button>
					</div>
				</template>
			</el-table-column>
		</fr-table>
		<el-button @click="print" style="margin-right: 20px">Print Selected</el-button>
		<span>=> check in console</span>
	</div>
</template>

<script>
	import FrTable from "@/components/frog-ui/table/index";

	export default {
		name: "testTable",
		components: {FrTable},
		asyncComputed: {
			async data() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/posts')).data;
			},
		},
		methods: {
			print() {
				console.log(this.$refs.table1.selectedRows)
			},
			handleEdit(index, row) {
				this.$alert(row, 'edit   ' + row.id, {
					confirmButtonText: '确定',
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${action}`
						});
					}
				})
			},
			handleDelete(index, row) {
				this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: 'Delete completed'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: 'Delete canceled'
					});
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
