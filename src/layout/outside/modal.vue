<template>
	<div id="dark" v-if="$store.getters.sidebarOpen" @click="$store.commit('TOGGLE_SIDEBAR')">
	</div>
</template>

<script>
	export default {
		name: "modal"
	}
</script>

<style scoped>
	#dark {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 700;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
