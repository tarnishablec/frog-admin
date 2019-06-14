<template>
	<div>
		<h1 style="text-align: center">
			<span style="vertical-align: middle;margin:0 30px;cursor: pointer;text-decoration: underline" @click="goViser">Viser Chart</span>
			<fr-icon icon="link"/>
		</h1>
		<div id="chart-page">
			<line-tem/>
			<pie-tem/>
			<area-tem/>
			<bar-tem/>
		</div>
	</div>
</template>

<script>
	import LineTem from "@/views/common/Test/Chart/line";
	import PieTem from "@/views/common/Test/Chart/pie";
	import AreaTem from "@/views/common/Test/Chart/area";
	import BarTem from "@/views/common/Test/Chart/bar";

	export default {
		name: "Chart",
		components: {BarTem, AreaTem, PieTem, LineTem},
		methods: {
			goViser() {
				window.open('https://viserjs.github.io/');
			}
		}
	}
</script>

<style lang="scss" scoped>
	h1{
		margin-top: 0;
	}
	#chart-page {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		& > div {
			border: 1px dashed #2a2a32;
			margin: 10px 5px;
			width: 40%;
			flex-shrink: 0;
			flex-grow: 0;
		}
	}
</style>
