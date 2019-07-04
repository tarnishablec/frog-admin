<template>
	<div id="toolbar">
		<sidebar-activator/>
		<div class="spacer"></div>
		<el-button type="success" @click="login">login</el-button>
		<el-button type="danger" @click="logout">logout</el-button>
	</div>
</template>

<script>
	import SidebarActivator from "@/layout/outside/toolbar/sidebarActivator";

	export default {
		name: "toolbar",
		components: {SidebarActivator},
		methods: {
			login() {
				this.$store.commit('switchRole', 'root');
			},
			logout() {
				this.$store.commit('switchRole', 'user');
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../style/variables";

	#toolbar {
		height: var(--toolbar-height);
		display: inline-flex;
		flex-wrap: nowrap;
	}
</style>
