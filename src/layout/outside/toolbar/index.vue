<template>
	<div id="toolbar">
		<sidebar-activator/>
		<div class="spacer"></div>
		<fr-button type="success" @click="login">login</fr-button>
		<fr-button type="danger" @click="logout">logout</fr-button>
	</div>
</template>

<script>
	import SidebarActivator from "@/layout/outside/toolbar/sidebarActivator";
	import FrButton from "@/components/frog-ui/frButton/index";

	export default {
		name: "toolbar",
		components: {FrButton, SidebarActivator},
		methods: {
			login() {
				this.$store.commit('switchRole', 'root');
			},
			logout() {
				this.$store.commit('switchRole', 'worker');
			},
		}
	}
</script>

<style lang="scss" scoped>
	#toolbar {
		height: var(--toolbar-height);
		display: inline-flex;
		flex-wrap: nowrap;
	}
</style>
