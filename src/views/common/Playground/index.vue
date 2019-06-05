<template>
	<div id="playground">
		<h1>
			Playground
		</h1>
		<div>
			<fr-button type="warning" outline>Hello</fr-button>
		</div>
		<div>
			<label>
				sidebar:
				<br/>
				width: <input v-model="$vars.sidebar.openWidth" type="number"/>
				color: <input v-model="$vars.sidebar.bgc"/>
				<br/>
				tipbar:
				<br/>
				width: <input v-model="$vars.tipbar.width"/>
				color: <input v-model="$vars.tipbar.bgc"/>
			</label>
		</div>
	</div>
</template>

<script>
	import FrButton from "@/components/frog-ui/frButton/index";

	export default {
		name: "Playground",
		components: {FrButton},
	}
</script>

<style scoped>

</style>
