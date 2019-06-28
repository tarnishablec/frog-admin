<template>
	<div id="app" >
		<layout/>
	</div>
</template>

<script>
	import Layout from "@/layout";

	export default {
		name: 'app',
		components: {
			Layout,
		},

		created() {
			this.$store.dispatch('UPDATE_ROUTES').then();
		},
		watch: {
			role() {
				this.$store.dispatch('UPDATE_ROUTES').then();
			}
		},
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-webkit-transform: translateZ(0);
		color: #2c3e50;
		overflow: hidden;
	}

	body {
		white-space: nowrap;
		margin: 0;
		padding: 0;
	}
</style>
