<template>
	<div id="sidebar">
		<sidebar-logo/>
	</div>
</template>

<script>
	import SidebarLogo from "@/layout/sidebar/sidebarLogo/index";
	export default {
		name: "sidebar",
		components: {SidebarLogo}
	}
</script>

<style lang="scss" scoped>
	#sidebar {
		flex-shrink: 0;
		transition: width 0.3s;
		background-color: var(--sidebar-bgc);
		width: var(--sidebar-width);
	}
</style>
