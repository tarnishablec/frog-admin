<template>
	<div>
		<line-tem/>
		<pie-tem/>
	</div>
</template>

<script>
	import LineTem from "@/views/common/Test/Chart/line";
	import PieTem from "@/views/common/Test/Chart/pie";

	export default {
		name: "Chart",
		components: {PieTem, LineTem}
	}
</script>

<style scoped>
	div > div {
		display: inline-block;
	}
</style>
