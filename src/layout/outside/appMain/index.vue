<template>
	<div id="app-main">
		<div id="dark" v-if="$store.getters.sidebarOpen" @click="$store.commit('TOGGLE_SIDEBAR')">
		</div>
		<transition name="fade-transform" mode="out-in">
			<router-view :key="route" style="padding: 1rem;"/>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "appMain",
		computed: {
			route() {
				return this.$route.path;
			}
		},
	}
</script>

<style lang="scss" scoped>
	#app-main {
		flex: 1;
		overflow: scroll;

		#dark {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 700;
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
</style>
