<template>
	<section id="playground">
		<h1>Playground</h1>
		<canvas ref="canvas" id="canvas">
		</canvas>
	</section>
</template>

<script>

	export default {
		name: "playground",
		data() {
			return {
				ctx: {},
				x: 200,
			}
		},
		methods: {
			canvasInit() {
				const canvas = document.querySelector('#canvas');
				canvas.width = window.innerWidth * 0.8;
				canvas.height = window.innerHeight * 0.8;
				this.ctx = canvas.getContext('2d');
			},
			animate() {
				requestAnimationFrame(this.animate);
				this.ctx.beginPath();
				this.ctx.fillStyle = 'rgba(245,80,56,0.5)';
				this.ctx.arc(this.x, 200, 30, 0, Math.PI * 2, false);
				this.ctx.fill();
				this.x += 1;
			}
		},
		mounted() {
			this.canvasInit();
			this.animate();
		},
	}
</script>

<style lang="scss" scoped>
	canvas {
		border: 1px solid black;
	}
</style>
