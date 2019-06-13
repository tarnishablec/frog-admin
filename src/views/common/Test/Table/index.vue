<template>
	<div>
		<fr-table ellipsis full-load stripe index border selection :data="data" ref="table1">
			<el-table-column slot="expand" type="expand">
				<template slot-scope="scope">
					{{scope.row.title}}
				</template>
			</el-table-column>
		</fr-table>
		<el-button @click="print" style="margin-right: 20px">Print Selected</el-button>
		<span>=> check in console</span>
	</div>
</template>

<script>

	export default {
		name: "testTable",
		asyncComputed: {
			async data() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/posts')).data;
			},
		},
		methods: {
			print() {
				console.log(this.$refs.table1.selectedRows)
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
