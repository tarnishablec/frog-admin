<template>
	<div id="playground">
		<h1>
			Playground
		</h1>

		<label>
			sidebar:
			<br/>
			width: <input v-model="$vars.sidebar.openWidth"/>
			color: <input v-model="$vars.sidebar.bgc"/>
			<br/>
			tipbar:
			<br/>
			width: <input v-model="$vars.tipbar.width"/>
			color: <input v-model="$vars.tipbar.bgc"/>
		</label>
	</div>
</template>

<script>
	export default {
		name: "Playground",
	}
</script>

<style scoped>

</style>
