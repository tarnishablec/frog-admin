<template>
	<section id="playground">
		<h1>Playground</h1>
		<canvas ref="canvas">

		</canvas>
	</section>
</template>

<script>
	export default {
		name: "playground",
		data() {
			return {}
		},
		methods: {
			canvasInit() {
				let canvas = this.$refs.canvas;
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				let c = canvas.getContext('2d');
				c.fillRect(100,100,100,100);
			}
		},
		mounted() {
			this.canvasInit();
		},
	}
</script>

<style lang="scss" scoped>
	canvas {
		border: 1px solid black;
	}
</style>
