<template>
	<div id="app-main">
		<v-scroll id="app-main-scroll" ref="scroll">
			<transition name="fade-transform" mode="out-in">
				<router-view/>
			</transition>
		</v-scroll>
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
		watch: {
			route() {
				setTimeout(()=>{
					let sc = this.$refs.scroll;
					sc.$el.scrollTop = 0;
					sc.$el.scrollLeft = 0;
					sc.update();
					sc.$forceUpdate();
				},this.$vars.transitionDuring * 1000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	#app-main {
		flex: 1;
		overflow: hidden;

		#app-main-scroll {
			transition: width var(--transition-during);
			width: calc(100vw - var(--sidebar-width));
			height: calc(100vh - var(--toolbar-height));
		}
	}
</style>
