<template>
	<div id="toolbar">
		<sidebar-activator/>
	</div>
</template>

<script>
	import SidebarActivator from "@/layout/outside/toolbar/sidebarActivator";
	export default {
		name: "toolbar",
		components: {SidebarActivator}
	}
</script>

<style lang="scss" scoped>
	#toolbar {
		height: var(--toolbar-height);
		display: inline-flex;
		flex-wrap: nowrap;
	}
</style>
