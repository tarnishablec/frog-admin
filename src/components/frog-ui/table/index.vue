<template>
	<div class="fr-table" v-loading="!data" :class="{'fr-table-loading':!data}">
		<el-table class="fr-table-body" :border="border" v-if="data" ref="elTable"
		          :data="data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)"
		          :stripe="stripe" :fit="fit" :show-header="showHeader"
		          :highlight-current-row="highlightCurrentRow" :max-height="maxHeight"
		          @selection-change="handleSelectionChange">
			<slot name="expand"/>
			<el-table-column v-if="selection" type="selection"/>
			<el-table-column v-if="index" type="index"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :key="name" :prop="name" :label="name"
			                 :show-overflow-tooltip="ellipsis"
			                 :align="align">
				<template slot-scope="scope">
					<span @click="enableEdit(scope.$index)" v-if="editingRow !== scope.$index">{{scope.row[name]}}</span>
					<el-input v-if="editingRow === scope.$index" v-model="scope.row[name]"/>
				</template>
			</el-table-column>
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column"
			                 :show-overflow-tooltip="ellipsis"
			                 :align="align">
				<template slot-scope="scope">
					<span @click="enableEdit(scope.$index)" v-if="editingRow !== scope.$index">{{scope.row[column]}}</span>
					<el-input v-if="editingRow === scope.$index" v-model="scope.row[column]"/>
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
			pagination: {
				type: Boolean,
				default: true,
			},
			editable: Boolean,
			columns: {
				type: Array,
			}
		},

		data() {
			return {
				currentPage: 1,
				selectedRows: [],
				editingRow: null,
			}
		},
		methods: {
			current_change(currentPage) {
				this.currentPage = currentPage;
			},
			handleSelectionChange() {
				this.selectedRows = this.$refs.elTable.store.states.selection
			},
			enableEdit(index) {
				this.editingRow = index;
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
