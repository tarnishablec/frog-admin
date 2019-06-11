<template>
	<div id="layout">
		<sidebar/>
		<outside/>
	</div>
</template>

<script>
	import Sidebar from "@/layout/sidebar/index";
	import Outside from "@/layout/outside/index";

	export default {
		name: "layout",
		components: {Outside, Sidebar}
	}
</script>

<style lang="scss" scoped>
	#layout {
		display: flex;
		height: 100vh;
		width: 100vw;
	}
</style>
