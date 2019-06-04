<template>
	<v-scroll id="app-main">
		<transition name="fade-transform" mode="out-in">
			<router-view/>
		</transition>
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
