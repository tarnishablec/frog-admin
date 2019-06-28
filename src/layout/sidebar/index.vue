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

</style>
