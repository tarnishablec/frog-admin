<template>
	<div id="chart-page">
		<line-tem/>
		<pie-tem/>
		<area-tem/>
		<bar-tem/>
	</div>
</template>

<script>
	import LineTem from "@/views/common/Test/Chart/line";
	import PieTem from "@/views/common/Test/Chart/pie";
	import AreaTem from "@/views/common/Test/Chart/area";
	import BarTem from "@/views/common/Test/Chart/bar";

	export default {
		name: "Chart",
		components: {BarTem, AreaTem, PieTem, LineTem}
	}
</script>

<style lang="scss" scoped>
	#chart-page {
		display: flex;
		flex-wrap: wrap;

		& > div {
			flex-shrink: 0;
		}
	}
</style>
