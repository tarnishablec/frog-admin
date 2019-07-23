<template>
	<div class="fr-table" :class="{'table-ellipsis-header':tableEllipsisHeader}">
		<el-table :data="showData" v-bind="$attrs" v-on="$listeners">
			<slot name="front"/>
			<el-table-column v-if="index" type="index" align="center" :index="indexMethod"/>
			<slot/>
			<el-table-column v-for="column in columns" :prop="getColumnProp(column)" :label="getColumnName(column)"
			                 :key="getColumnName(column)"
			                 :width="column.width"
			                 :show-overflow-tooltip="showOverflowTooltip"
			                 :align="alignment"/>
			<slot name="back"/>
		</el-table>
		<el-pagination v-if="pagination" :total="data?data.length:0" @current-change="currentChange"
		               :page-size.sync="pageSize"
		               layout="prev,pager,next,jumper,total"/>
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
				default: () => {
					return [];
				}
			},
			alignment: {
				type: String,
				default: 'center',
			},
			pageSize: {
				type: Number,
				default: 20,
			},
			showOverflowTooltip: Boolean,
			pagination: Boolean,
			tableEllipsisHeader: Boolean,
		},
		data() {
			return {
				currentPage: 1,
			}
		},
		computed: {
			showData() {
				return this.pagination ? (this.data ? this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) : []) : this.data;
			}
		},
		methods: {
			currentChange(currentPage) {
				this.currentPage = currentPage;
			},
			indexMethod(index) {
				return index + 1 + (this.currentPage - 1) * this.pageSize;
			},
			getColumnName(column) {
				return (typeof column === 'string' || column instanceof String) ? column : column.name;
			},
			getColumnProp(column) {
				if (typeof column === 'string' || column instanceof String) {
					return column
				} else if (column.prop) {
					return column.prop;
				} else if (column.name) {
					return column.name;
				}
				return '';
			}
		}
	}
</script>

<style scoped>

</style>
