<template>
	<div class="fr-table" v-loading="!data">
		<el-table class="fr-table-body" :border="border" v-if="data"
		          :data="showData">
			<el-table-column v-if="index" type="index" style="text-align: center"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :prop="name" :label="name"/>
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
			index: {
				type: Boolean,
			},
			pageSize: {
				type: Number,
				default: 15,
			},
			border: {
				type: Boolean,
			},
			fullLoad: {
				type: Boolean,
			}
		},
		data() {
			return {
				currentPage: 1,
			}
		},
		computed: {
			showData() {
				return this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
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
	.fr-table {
		min-height: 300px;
	}

	.fr-table-body {
		margin-bottom: 1rem;
	}
</style>
