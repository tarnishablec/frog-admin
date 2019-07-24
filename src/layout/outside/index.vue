<template>
	<div class="outside">
		<modal/>
		<toolbar/>
		<app-main/>
		<tipbar/>
	</div>
</template>

<script>
	import Toolbar from "@/layout/outside/toolbar/index";
	import AppMain from "@/layout/outside/appMain/index";
	import tipbar from "@/layout/outside/tipbar/index";
	import Modal from "@/layout/outside/modal";

	export default {
		name: "outside",
		components: {Modal, tipbar, AppMain, Toolbar}
	}
</script>

<style lang="scss" scoped>
	.outside {
		width: calc(100vw - 65px);
		display: flex;
		flex-direction: column;
		background-color: #f0f0f1;
		padding-left: 65px;
	}
</style>
