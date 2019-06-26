<template>
	<div id="sidebar" :style="STYLE_VARIABLES">
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
				STYLE_VARIABLES: 'STYLE_VARIABLES',
			})
		},
	}
</script>

<style lang="scss" scoped>

</style>
