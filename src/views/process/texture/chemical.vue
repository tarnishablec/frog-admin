<template>
	<div id="texture-chemical">
		<div class="chemical-card">

		</div>
	</div>
</template>

<script>
	export default {
		name: "textureChemical"
	}
</script>

<style lang="scss" scoped>
	#texture-chemical {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		.chemical-card{

		}
	}
</style>
