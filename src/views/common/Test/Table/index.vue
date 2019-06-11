<template>
	<div>
		<fr-table ellipsis full-load index border selection :data="data"/>
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
		}
	}
</script>

<style lang="scss" scoped>

</style>
