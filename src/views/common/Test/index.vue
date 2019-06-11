<template>
	<div id="test">
		<fr-table full-load index border :data="data"/>
	</div>
</template>

<script>
	import FrTable from "@/components/frog-ui/table/index";

	export default {
		name: "Test",
		components: {FrTable},
		asyncComputed: {
			async data() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/photos')).data;
			},
		}
	}
</script>

<style lang="scss" scoped>
	#test {
		padding: 1rem;
	}
</style>
