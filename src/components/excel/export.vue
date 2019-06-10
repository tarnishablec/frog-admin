<template>
	<div class="excel-export-panel">
		<div>
			<span>Filename:</span>
			<fr-input v-model="fn" placeholder="filename"/>
		</div>
		<div>
			<span>Type:</span>
			<fr-select :data="options"/>
		</div>
	</div>

</template>

<script>
	import FrInput from "@/components/frog-ui/input/index";
	import FrSelect from "@/components/frog-ui/select/index";

	export default {
		name: "excelExportPanel",
		components: {FrSelect, FrInput},
		props: {
			filename: {
				type: String,
			},
		},

		data() {
			return {
				fn: this.filename,
				options: ['xlsx', 'csv', 'txt']
			}
		}
	}
</script>

<style lang="scss" scoped>
	.excel-export-panel {
		display: flex;
		align-items: center;

		& > div {
			display: inline;

			& > span {
				margin-right: 5px;
				font-weight: bold;
			}
		}

	}
</style>
