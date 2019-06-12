<template>
	<div id="sidebar">
		<sidebar-logo/>
		<el-scrollbar id="sidebar-scroll">
			<sidebar-menu/>
		</el-scrollbar>
	</div>
</template>

<script>
	import SidebarLogo from "@/layout/sidebar/sidebarLogo/index";
	import SidebarMenu from "@/layout/sidebar/sidebarMenu/index";

	export default {
		name: "sidebar",
		components: {SidebarMenu, SidebarLogo},
	}
</script>

<style lang="scss" scoped>
	#sidebar {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		transition: width 0.3s;
		background-color: #393942;
		width: var(--sidebar-width);
		height: 100vh;
		z-index: 800;
		overflow-x: hidden;

		#sidebar-scroll {
			flex: 1;
		}
	}
</style>
