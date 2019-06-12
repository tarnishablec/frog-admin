<template>
	<div class="fr-table" v-loading="!data">
		<el-table class="fr-table-body" :border="border" v-if="data"
							:data="data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)"
							:stripe="stripe" :fit="fit" :show-header="showHeader"
							:highlight-current-row="highlightCurrentRow" :max-height="maxHeight">
			<el-table-column v-if="selection" type="selection"/>
			<el-table-column v-if="index" type="index"/>
			<el-table-column v-if="fullLoad" v-for="(value,name) in data[0]" :key="name" :prop="name" :label="name"
											 :width="isPureNumber(value)?'100':''"
											 :show-overflow-tooltip="ellipsis"/>
			<slot v-if="!fullLoad"/>
		</el-table>
		<el-pagination v-if="data" :total="data.length"
									 :page-size.sync="pageSize"
									 background
									 style="float: right;"
									 @current-change="current_change"/>
	</div>
</template>

<script>
	import {isPureNumber} from '@/utils/regexUtils'

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
			isPureNumber,
		},
	}
</script>

<style lang="scss" scoped>

</style>
