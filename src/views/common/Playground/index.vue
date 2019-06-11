<template>
	<div id="playground">
		<h1>
			Playground
		</h1>
		<excel-export-panel/>
		<div>
			<label>
				<input v-model="$apps.title"></input>
			</label>
		</div>
		<div>
			<fr-button type="warning" outline>Hello</fr-button>
			<fr-button type="warning" disabled>Hello</fr-button>

		</div>
		<div>
			<label>
				sidebar:
				<br/>
				width: <input v-model="$vars.sidebar.openWidth" type="number"/>
				color: <input v-model="$vars.sidebar.bgc"/>
				<br/>
				tipbar:
				<br/>
				width: <input v-model="$vars.tipbar.width"/>
				color: <input v-model="$vars.tipbar.bgc"/>
				<br/>
				during: <input v-model="$vars.transitionDuring">
			</label>
		</div>
	</div>
</template>

<script>
	import FrButton from "@/components/frog-ui/button/index";
	import ExcelExportPanel from "@/components/excel/export";

	export default {
		name: "Playground",
		components: {ExcelExportPanel, FrButton},
	}
</script>

<style lang="scss" scoped>
	#playground {
		background-color: darkgrey;

		div {
			padding-bottom: 20px;
		}
	}
</style>
