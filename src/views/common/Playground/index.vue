<template>
	<section id="playground">
		<h1>Playground</h1>
		<div style="border: 1px solid grey;padding: 10px;border-radius: 5px">
			<div style="margin-bottom: 20px">
				<div>Debounce Input</div>
				<fx-debounce-input :debounce-time="300" v-model="input"/>
				<br>
				v-model: {{input}}
			</div>
			<div>
				<div>Normal Input</div>
				<el-input v-model="eli"/>
				<br>
				v-model: {{eli}}
			</div>
		</div>
	</section>
</template>

<script>

	import fxDebounceInput from "@/components/frogx-ui/debounceInput/index";

	export default {
		name: "playground",
		components: {fxDebounceInput},
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
