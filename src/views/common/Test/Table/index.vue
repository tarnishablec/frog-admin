<template>
	<div>
		<fr-table full-load :data="commentData" ref="table1"
		          ellipsis stripe index border selection
		          removable editable addable exportable inline-edit
		          title="Comment"
		          :page-size="10"
		          @rowUpdate="updateRow"
		          @rowRemove="removedRow"
		          @rowAdd="addRow">
			<el-table-column slot="expand" type="expand">
				<template slot-scope="scope">
					{{scope.row.email}}
				</template>
			</el-table-column>
			<template slot="toolbar">
				<el-button size="mini">Custom Button</el-button>
				<el-button size="mini" @click="printSelected">Print Selected</el-button>
				<json-to-csv-button :data="commentData" filename="fullData">Full Export</json-to-csv-button>
			</template>
		</fr-table>
		<div>
		</div>
	</div>
</template>

<script>
	import jsonToCsvButton from "@/components/excel/jsonToCsvButton";

	export default {
		name: "testTable",
		components: {jsonToCsvButton},
		asyncComputed: {
			async commentData() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/comments')).data;
			},
		},
		data() {
			return {
				// columns: ['userId', 'id', 'title'],    //can use :columns="columns" in fr-table
			}
		},
		methods: {
			printSelected() {
				this.$notify({
					type: 'success',
					message: this.$refs.table1.selectedRows,
				})
			},
			updateRow(index, row) {
				this.$message({
					message: `call some update api, ${row.name} is updated`,
					type: 'warning'
				});
				// this.loadComments();
				this.$asyncComputed.commentData.update();
			},
			removedRow(index, row) {
				this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: `call some remove api, ${row.name} is removed`
					});
					this.$asyncComputed.commentData.update();
				}).catch(() => {
					this.$message({
						type: 'info',
						message: 'Delete canceled'
					});
				});
			},
			addRow(index, row) {
				this.$alert(
					`call some add api, ${row.name} is added`,{

					}
				).then(()=>{
					this.$asyncComputed.commentData.update();
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
