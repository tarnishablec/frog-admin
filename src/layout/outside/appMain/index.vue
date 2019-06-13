<template>
	<div id="app-main">
		<el-scrollbar id="app-main-scroll" :noresize="false">
			<transition name="fade-transform" mode="out-in">
				<router-view style="padding: 1rem;"/>
			</transition>
		</el-scrollbar>
	</div>
</template>

<script>
	export default {
		name: "appMain",
		computed: {
			route() {
				return this.$route.path;
			}
		},
	}
</script>

<style lang="scss" scoped>
	#app-main {
		flex: 1;
		overflow: hidden;

		#app-main-scroll {
			transition: width 0.3s;
			width: calc(100vw - var(--sidebar-width));
			height: 100%;
		}
	}
</style>
