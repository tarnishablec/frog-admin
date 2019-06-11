<template>
	<div class="fr-table" v-loading="!data">
		<el-table class="fr-table-body" :border="border" v-if="data"
		          :data="data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)"
		          :stripe="stripe" :fit="fit" :show-header="showHeader"
		          :highlight-current-row="highlightCurrentRow" :max-height="maxHeight">
			<el-table-column v-if="index" type="index" style="text-align: center"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :key="name" :prop="name" :label="name"/>
			<slot v-if="!fullLoad"/>
		</el-table>
		<el-pagination v-if="data" :total="data.length"
		               :page-size.sync="pageSize"
		               style="text-align: right"
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
			}
		},
		data() {
			return {
				currentPage: 1,
			}
		},
		methods: {
			current_change(currentPage) {
				this.currentPage = currentPage;
			},
		},

	}
</script>

<style scoped>

</style>
