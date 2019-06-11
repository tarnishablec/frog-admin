<template>
	<div id="test">
		<fr-table full-load index border :data="dummyEmployee">
		</fr-table>
	</div>
</template>

<script>
	import FrTable from "@/components/frog-ui/table/index";
	export default {
		name: "Test",
		components: {FrTable},
		asyncComputed: {
			async dummyEmployee() {
				return (await this.$axios.get('http://dummy.restapiexample.com/api/v1/employees')).data;
			},
		}
	}
</script>

<style lang="scss" scoped>
	#test {
		padding: 1rem;
	}
</style>
