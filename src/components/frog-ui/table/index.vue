<template>
	<div class="fr-table">
		<el-table :data="showData" v-bind="$attrs">
			<el-table-column v-if="index" type="index" align="center" :index="indexMethod"/>
			<el-table-column v-for="column in columns" :prop="getColumnProp(column)" :label="getColumnName(column)"
			                 :key="column"
			                 :width="column.width"
			                 :show-overflow-tooltip="$attrs['show-overflow-tooltip']"
			                 :align="$attrs.alignment"/>
			<slot/>
		</el-table>
		<el-pagination :total="data?data.length:0" @current-change="currentChange" :page-size.sync="pageSize"
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
		computed: {
			showData() {
				return this.data ? this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) : [];
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
