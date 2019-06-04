<template>
	<div id="sidebar-activator" @click="toggleSidebar">
		<fr-icon icon="indent" id="activator-icon" :class="{'activator-turn':!sidebarOpen}"/>
	</div>
</template>

<script>
	import FrIcon from "@/components/frog-ui/frIcon/index";
	import {mapGetters} from 'vuex'


	export default {
		name: "sidebarActivator",
		components: {FrIcon},
		methods: {
			toggleSidebar() {
				this.$store.commit('TOGGLE_SIDEBAR');
			}
		},
		computed: {
			...mapGetters({
				sidebarOpen: 'sidebarOpen',
			})
		}
	}
</script>

<style lang="scss" scoped>
	#sidebar-activator {
		width: var(--toolbar-height);
		text-align: center;
		line-height: var(--toolbar-height);

		#activator-icon {
			transition: transform 0.3s;

			&.activator-turn {
				transform: rotate(-180deg);
			}
		}
	}
</style>
