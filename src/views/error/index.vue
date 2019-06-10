<template>
	<div id="error">
		<router-link to="/">
			<fr-button>BACK</fr-button>
		</router-link>
		<router-view/>
	</div>
</template>

<script>
	import FrButton from "@/components/frog-ui/button/index";
	export default {
		name: "error",
		components: {FrButton}
	}
</script>

<style scoped>
	#error {
	}
</style>
