<template>
	<div>
		<fr-table ellipsis full-load index border selection :data="data" ref="table1"/>
		<el-button @click="print">Print Selected</el-button>
	</div>
</template>

<script>
	import FrTable from "@/components/frog-ui/table/index";

	export default {
		name: "testTable",
		components: {FrTable},
		asyncComputed: {
			async data() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/comments')).data;
			},
		},
		methods:{
			print(){
				console.log(this.$refs.table1.selectedRows)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
