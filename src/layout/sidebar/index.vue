<template>
	<div id="sidebar" :class="{'sidebar-hide':!sidebarOpen}">
		<sidebar-logo/>
		<el-scrollbar id="sidebar-scroll">
			<sidebar-menu/>
		</el-scrollbar>
	</div>
</template>

<script>
	import SidebarLogo from "@/layout/sidebar/sidebarLogo/index";
	import SidebarMenu from "@/layout/sidebar/sidebarMenu/index";
	import {mapGetters} from 'vuex'

	export default {
		name: "sidebar",
		components: {SidebarMenu, SidebarLogo},
		computed: {
			...mapGetters({
				sidebarOpen: 'sidebarOpen',
			})
		}
	}
</script>

<style lang="scss" scoped>
	#sidebar {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		transition: width 0.3s;
		background-color: #393942;
		width: 200px;
		height: 100vh;
		z-index: 800;
		overflow-x: hidden;

		&.sidebar-hide {
			width: 64px !important;
			overflow-x: hidden;
		}

		#sidebar-scroll {
			flex: 1;
		}
	}
</style>
