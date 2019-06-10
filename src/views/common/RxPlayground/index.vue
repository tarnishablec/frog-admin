<template>
	<div id="rx-playground">
		<fx-button @dblclick.native="ok">
			OK
		</fx-button>
	</div>
</template>

<script>
	import FxButton from "@/components/frogx-ui/button/index";

	export default {
		name: "rxPlayground",
		components: {FxButton},
		methods: {
			ok: () => {
				console.log('ok');
			}
		}
	}
</script>

<style lang="scss" scoped>
	#rx-playground {
		width: 100%;
		height: 100%;
		background-color: #c2c2c2;
	}
</style>
