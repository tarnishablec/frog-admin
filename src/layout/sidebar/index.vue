<template>
	<div id="sidebar">
		<sidebar-logo/>
		<v-scroll id="sidebar-scroll" :settings="settings">
			<sidebar-menu/>
		</v-scroll>
	</div>
</template>

<script>
	import SidebarLogo from "@/layout/sidebar/sidebarLogo/index";
	import SidebarMenu from "@/layout/sidebar/sidebarMenu/index";

	export default {
		name: "sidebar",
		components: {SidebarMenu, SidebarLogo},
		data() {
			return {
				settings: {
					suppressScrollX: true,
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#sidebar {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		transition: width var(--transition-during);
		background-color: var(--sidebar-bgc);
		width: var(--sidebar-width);
		z-index: 999;
		overflow-x: hidden;

		#sidebar-scroll {
			flex: 1;
		}
	}
</style>
