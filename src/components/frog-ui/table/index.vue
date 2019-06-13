<template>
	<div class="fr-table" v-loading="!data" :class="{'fr-table-loading':!data}">
		<el-table class="fr-table-body" :border="border" v-if="data" ref="elTable"
		          :data="data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)"
		          :stripe="stripe" :fit="fit" :show-header="showHeader"
		          :highlight-current-row="highlightCurrentRow" :max-height="maxHeight"
		          @selection-change="handleSelectionChange">
			<el-table-column v-if="expand" type="expand"/>
			<el-table-column v-if="selection" type="selection"/>
			<el-table-column v-if="index" type="index"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :key="name" :prop="name" :label="name"
			                 :show-overflow-tooltip="ellipsis"
			                 :align="align"/>
			<el-table-column label="Operations" align="center" width="200" v-if="editable&&removable">
				<template slot-scope="scope">
					<div>
						<el-button
								v-if="editable"
								size="mini"
								@click="handleEdit(scope.$index, scope.row)">edit
						</el-button>
						<el-button
								v-if="removable"
								size="mini"
								type="danger"
								@click="handleDelete(scope.$index, scope.row)">remove
						</el-button>
					</div>
				</template>
			</el-table-column>
			<slot/>
		</el-table>
		<el-pagination v-if="pagination && data" :total="data.length"
		               :page-size.sync="pageSize"
		               background
		               style="float: right;"
		               @current-change="current_change"/>
	</div>
</template>

<script>

	export default {
		name: "frTable",
		props: {
			data: {
				required: true,
			},
			pageSize: {
				type: Number,
				default: 15,
			},
			index: Boolean,
			border: Boolean,
			fullLoad: Boolean,
			stripe: Boolean,
			fit: {
				type: Boolean,
				default: true,
			},
			showHeader: {
				type: Boolean,
				default: true,
			},
			highlightCurrentRow: Boolean,
			maxHeight: {
				type: Number,
			},
			selection: Boolean,
			backgroundColor: {
				type: String,
				default: 'white',
			},
			ellipsis: Boolean,
			align: {
				type: String,
				default: 'left',
			},
			expand: Boolean,
			pagination: {
				type: Boolean,
				default: true,
			},
			editable: Boolean,
			removable: Boolean,
		},

		data() {
			return {
				currentPage: 1,
				selectedRows: [],
			}
		},
		methods: {
			current_change(currentPage) {
				this.currentPage = currentPage;
			},
			handleSelectionChange() {
				this.selectedRows = this.$refs.elTable.store.states.selection
			},
			handleEdit(index, row) {
				this.$alert(row, 'edit   ' + row.id, {
					confirmButtonText: 'confirm',
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
		},
	}
</script>

<style lang="scss" scoped>

</style>
