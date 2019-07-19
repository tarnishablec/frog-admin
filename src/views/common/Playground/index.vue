<template>
	<section id="playground">
		<h1>Playground</h1>
		<div>
			<fx-search-input :debounce-time="1000" v-model="input"/>
			<br>
			{{input}}
		</div>
	</section>
</template>

<script>

	import FxSearchInput from "@/components/frogx-ui/searchInput/index";

	export default {
		name: "playground",
		components: {FxSearchInput},
		data() {
			return {
				input: 'cyh',
				eli: 'ok',
			}
		},
		methods: {},
		mounted() {

		},
	}
</script>

<style lang="scss" scoped>
	canvas {
		border: 1px solid black;
	}
</style>
