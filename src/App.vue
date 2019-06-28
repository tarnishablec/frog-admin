<template>
	<div id="app" :style="STYLE_VARIABLES">
		<layout/>
	</div>
</template>

<script>
	import Layout from "@/layout";
	import {mapGetters} from 'vuex';

	export default {
		name: 'app',
		components: {
			Layout,
		},
		computed: {
			...mapGetters({
				STYLE_VARIABLES: 'STYLE_VARIABLES',
				role: 'role'
			})
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
