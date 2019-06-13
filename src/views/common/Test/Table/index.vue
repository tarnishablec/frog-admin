<template>
	<div>
		<fr-table :columns="columns" :data="data" ref="table1"
		          ellipsis stripe index border selection
		          removable editable addable
		          @rowChange="changeRow"
		          @rowRemove="removedRow"
		          @rowAdd="addRow">
			<el-table-column slot="expand" type="expand">
				<template slot-scope="scope">
					{{scope.row.title}}
				</template>
			</el-table-column>
		</fr-table>
		<el-button @click="printSelected" style="margin-right: 20px">Print Selected</el-button>
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
		data() {
			return {
				columns: ['userId', 'id', 'title']
			}
		},
		methods: {
			printSelected() {
				console.log(this.$refs.table1.selectedRows)
			},
			changeRow(index, row) {
				console.log(index, row)
			},
			removedRow(index, row) {
				console.log(index, row)
			},
			addRow(index, row) {
				console.log(index, row)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
