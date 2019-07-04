<template>
	<div class="fr-table">
		<el-table :data="showData">
			<el-table-column v-if="index" type="index" align="center"/>
			<el-table-column v-for="column in columns" :prop="column" :label="column" :key="column" show-overflow-tooltip
			                 align="center"/>
			<slot/>
		</el-table>
		<el-pagination :total="data.length" @current-change="currentChange" :page-size.sync="pageSize"
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
				return data ? data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) : [];
			}
		},
		methods: {
			currentChange(currentPage) {
				this.currentPage = currentPage;
			}
		}
	}
</script>

<style scoped>

</style>
