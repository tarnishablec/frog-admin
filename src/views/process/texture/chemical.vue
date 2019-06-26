<template>
	<div id="texture-chemical" class="grid-dashboard">
		<el-card class="chemical-card" v-for="i in 12" :key="i">
			<div slot="header">
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: "textureChemical",
		asyncComputed:{
		}
	}
</script>

<style lang="scss" scoped>
	#texture-chemical {

		.chemical-card {

		}
	}
</style>
