<template>
	<div class="fr-table" v-loading="!data" :class="{'fr-table-loading':!data}">
		<div class="fr-table-toolbar" v-if="data">
			<span v-if="title">{{title}}</span>
			<div>
				<slot name="toolbar"/>
				<json-to-csv-button v-if="exportable" :data="showData" filename="showData">Export Show Data</json-to-csv-button>
				<el-button v-if="addable" size="mini" type="primary" @click="startAddingRow">new</el-button>
			</div>
		</div>
		<el-table class="fr-table-body" :border="border" v-if="data" ref="elTable"
		          :data="nowData"
		          :row-class-name="rowClassName"
		          :stripe="stripe" :fit="fit" :show-header="showHeader"
		          :highlight-current-row="highlightCurrentRow" :max-height="maxHeight"
		          @selection-change="handleSelectionChange">
			<slot name="expand"/>
			<el-table-column v-if="selection" type="selection"/>
			<el-table-column v-if="index" type="index" :index="indexStart"/>
			<el-table-column v-if="data.length===0"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :key="name" :prop="name" :label="name"
			                 :show-overflow-tooltip="ellipsis"
			                 :align="align">
				<template slot-scope="scope">
					<!--					<editable-text :editable="editable" v-model="scope.row[name]"/>-->
					<span @click="inlineEdit?enableEdit(scope.$index):''"
					      v-if="editingRow !== scope.$index">{{scope.row[name]}}</span>
					<el-input v-if="editingRow === scope.$index" v-model="scope.row[name]"/>
				</template>
			</el-table-column>
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column"
			                 :show-overflow-tooltip="ellipsis"
			                 :align="align">
				<template slot-scope="scope">
					<span @click="inlineEdit?enableEdit(scope.$index):''"
					      v-if="editingRow !== scope.$index">{{scope.row[column]}}</span>
					<el-input v-if="editingRow === scope.$index" v-model="scope.row[column]"/>
				</template>
			</el-table-column>
			<el-table-column label="Operations" align="center" width="200" v-if="editable||removable">
				<template slot="header" v-if="addable">
				</template>
				<template slot-scope="scope">
					<div v-if="scope.$index===0&&isAddingRow">
						<el-button
								size="mini"
								@click="addRow(scope)">insert
						</el-button>
						<el-button
								size="mini"
								type="danger"
								@click="cancelAdd">cancel
						</el-button>
					</div>
					<div v-else>
						<div v-if="editingRow === scope.$index">
							<el-button
									size="mini"
									@click="$emit('rowUpdate',trueIndex(scope),scope.row)">update
							</el-button>
							<el-button
									size="mini"
									type="danger"
									@click="editingRow=null">cancel
							</el-button>
						</div>
						<div v-else>
							<el-button
									v-if="editable"
									size="mini"
									@click="enableEdit(scope.$index)">edit
							</el-button>
							<el-button
									v-if="removable"
									size="mini"
									type="danger"
									@click="$emit('rowRemove',trueIndex(scope), scope.row)">remove
							</el-button>
						</div>
					</div>
				</template>
			</el-table-column>
			<slot/>
		</el-table>
		<el-pagination v-if="pagination && data" :total="data.length"
		               :page-size.sync="pageSize"
		               layout="prev,pager,next,jumper,total"
		               background
		               @current-change="current_change"/>
	</div>
</template>

<script>
	import {deepCopy} from '@/utils/commonUtils'
	import JsonToCsvButton from "@/components/excel/jsonToCsvButton";

	export default {
		name: "frTable",
		components: {JsonToCsvButton},
		props: {
			title: String,
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
			rowClassName: String,
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
			exportable: Boolean,
			inlineEdit: Boolean,
			columns: {
				type: Array,
			},
		},
		computed: {
			nowData() {
				let sd = this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
				let ss = deepCopy(sd[0]);
				for (let s in ss) {
					ss[s] = '-----';
				}
				if (this.isAddingRow) {
					sd.splice(0, 0, ss);
				}
				this.showData = sd;
				return sd;
			},
			indexStart() {
				return this.isAddingRow ? 0 : 1;
			},
			trueIndex() {
				return scope => {
					return this.isAddingRow ? scope.$index : scope.$index + 1;
				}
			}
		},
		data() {
			return {
				sourceData: this.data,
				showData: null,
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
				if (this.editable)
					this.editingRow = index;
			},
			startAddingRow() {
				this.isAddingRow = true;
				this.editingRow = 0;
			},
			cancelAdd() {
				this.editingRow = null;
				this.isAddingRow = false;
			},
			addRow(scope) {
				this.$emit('rowAdd', this.trueIndex(scope), scope.row);
				this.cancelAdd();
			}
		},
	}
</script>
