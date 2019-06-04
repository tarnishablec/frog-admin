<template>
	<div id="tipbar" :class="{'tipbar-hide':!tipbarOpen}">
		<div id="tipbar-trigger" @click="toggleTipbar">
			<fr-icon :icon="tipbarOpen? 'verticalleft':'verticalright'"/>
		</div>
		<transition name="fade" mode="out-in">
			<router-view name="tip"/>
		</transition>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import FrIcon from "@/components/frog-ui/frIcon/index";

	export default {
		name: "tipbar",
		components: {FrIcon},
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
	#tipbar {
		width: var(--tipbar-width);
		background-color: var(--tipbar-bgc);
		position: fixed;
		height: 100%;
		right: 0;
		transition: all var(--transition-during);

		&.tipbar-hide {
			right: calc(0px - var(--tipbar-width));
		}

		#tipbar-trigger {
			line-height: 50px;
			background-color: #1d2937;
			height: 50px;
			width: 50px;
			position: absolute;
			right: 100%;
			top: 250px;
			border-radius: 6px 0 0 6px;
			color: white;
			text-align: center;
		}
	}
</style>
