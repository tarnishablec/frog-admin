<template>
	<div id="tipbar" :class="{'tipbar-hide':!tipbarOpen}">
		<div id="tipbar-trigger" @click="toggleTipbar">
			<fr-icon :icon="tipbarOpen? 'doubleright':'heatmap'"/>
		</div>
		<transition name="fade" mode="out-in">
			<router-view name="tip"/>
		</transition>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: "tipbar",
		methods: {
			toggleTipbar() {
				this.$store.commit('TOGGLE_TIPBAR');
			}
		},
		computed: {
			...mapGetters({
				tipbarOpen: 'tipbarOpen',
			})
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../style/variables";

	#tipbar {
		width: $tipbar-width;
		background-color: #dddddd;
		white-space: normal;
		position: fixed;
		height: 100vh;
		right: 0;
		transition: all 0.3s;
		z-index: 900;

		&.tipbar-hide {
			right: calc(0px - #{$tipbar-width});
		}

		#tipbar-trigger {
			line-height: 50px;
			background-color: #1d2937;
			height: 50px;
			width: 50px;
			position: absolute;
			right: 100%;
			bottom: 100px;
			border-radius: 6px 0 0 6px;
			color: white;
			text-align: center;
		}
	}
</style>
