<template>
	<div class="fr-table" v-loading="!data" :class="{'fr-table-loading':!data}">
		<el-table class="fr-table-body" :border="border" v-if="data" ref="elTable"
		          :data="showData"
		          :stripe="stripe" :fit="fit" :show-header="showHeader"
		          :highlight-current-row="highlightCurrentRow" :max-height="maxHeight"
		          @selection-change="handleSelectionChange">
			<slot name="expand"/>
			<el-table-column v-if="selection" type="selection"/>
			<el-table-column v-if="index" type="index" :index="indexStart"/>
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
			<el-table-column label="Operations" align="center" width="200" v-if="editable&&removable">
				<template slot="header" v-if="addable">
					<el-button size="mini" type="primary" @click="startAddingRow">new</el-button>
				</template>
				<template slot-scope="scope">
					<div v-if="scope.$index===0&&isAddingRow">
						<el-button
								size="mini"
								@click="$emit('rowAdd',scope.$index, scope.row)">confirm
						</el-button>
						<el-button
								size="mini"
								type="danger"
								@click="cancelAdd">cancel
						</el-button>
					</div>
					<div v-else>
						<el-button
								v-if="editable"
								size="mini"
								@click="$emit('rowChange',scope.$index, scope.row)">update
						</el-button>
						<el-button
								v-if="removable"
								size="mini"
								type="danger"
								@click="$emit('rowRemove',scope.$index, scope.row)">remove
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
	import {deepCopy} from '@/utils/commonUtils'

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
			removable: Boolean,
			addable: Boolean,
			columns: {
				type: Array,
			}
		},
		computed: {
			showData() {
				let sd = this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
				let ss = deepCopy(sd[0]);
				for (let s in ss) {
					ss[s] = '-----';
				}
				if (this.isAddingRow) {
					sd.splice(0, 0, ss);
				}
				return sd;
			},
			indexStart() {
				return this.isAddingRow ? 0 : 1;
			},
		},
		data() {
			return {
				sourceData: this.data,
				currentPage: 1,
				selectedRows: [],
				editingRow: null,
				isAddingRow: false,
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
			},
			startAddingRow() {
				this.isAddingRow = true;
				this.editingRow = 0;
			},
			cancelAdd() {
				this.editingRow = null;
				this.isAddingRow = false;
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
