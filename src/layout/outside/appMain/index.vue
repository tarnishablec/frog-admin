<template>
	<v-scroll id="app-main">
		<router-view/>
	</v-scroll>
</template>

<script>
	export default {
		name: "appMain"
	}
</script>

<style lang="scss" scoped>
	#app-main {
		flex: 1;
	}
</style>
