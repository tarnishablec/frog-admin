<template>
	<div class="fr-table">
		<el-table :data="showData" v-bind="$attrs">
			<el-table-column v-if="index" type="index" align="center" :index="indexMethod"/>
			<el-table-column v-for="column in columns" :prop="column" :label="column" :key="column"
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
			}
		}
	}
</script>

<style scoped>

</style>
