<template>
	<div id="sidebar">
		<sidebar-logo/>
		<v-scroll id="sidebar-scroll">
			<sidebar-menu/>
		</v-scroll>
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
				role: 'role'
			})
		},
		watch: {
			role() {
				this.$store.dispatch('UPDATE_ROUTES').then();
			}
		},

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

		#sidebar-scroll {
			flex: 1;
		}
	}
</style>
