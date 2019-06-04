<template>
	<div id="app" :style="STYLE_VARIABLES">
		<layout/>
	</div>
</template>

<script>
	import Layout from "@/layout/index";
	import {mapGetters} from 'vuex'

	export default {
		components: {Layout},
		computed: {
			...mapGetters({
				STYLE_VARIABLES: 'STYLE_VARIABLES',
			})
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	body {
		margin: 0;
		padding: 0;
	}
</style>
