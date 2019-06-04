<template>
	<div id="outside">
		<toolbar/>
		<app-main/>
		<tipbar/>
	</div>
</template>

<script>
	import Toolbar from "@/layout/outside/toolbar/index";
	import AppMain from "@/layout/outside/appMain/index";
	import tipbar from "@/layout/outside/tipbar/index";
	export default {
		name: "outside",
		components: {tipbar, AppMain, Toolbar}
	}
</script>

<style lang="scss" scoped>
	#outside{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
