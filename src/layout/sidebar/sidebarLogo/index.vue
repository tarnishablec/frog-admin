<template>
	<router-link id="sidebar-logo" to="/">
		<img :src="logo" alt="">
		<transition name="fade" mode="out-in">
			<span v-if="sidebarOpen" id="sidebar-logo-text">{{title}}</span>
		</transition>
	</router-link>
</template>

<script>
	import FrIcon from "@/components/frog-ui/frIcon/index";
	import {mapGetters} from 'vuex'

	export default {
		name: "sidebarLogo",
		components: {FrIcon},
		data() {
			return {
				title: 'VSKY MES UI',
				logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
			}
		},
		computed: {
			...mapGetters({
				sidebarOpen: 'sidebarOpen'
			})
		},

	}
</script>

<style lang="scss" scoped>
	#sidebar-logo{
		min-height: var(--toolbar-height);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		img{
			width: 32px;
			height: 32px;
		}

		#sidebar-logo-text{
			display: inline;
			color: #fff;
			margin-left: 12px;
			white-space: nowrap;
			line-height: var(--toolbar-height);
		}
	}
</style>
