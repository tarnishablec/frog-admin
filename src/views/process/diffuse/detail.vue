<template>
	<common-machine-detail work-cell-code="DF"/>
</template>
<script>


	import commonMachineDetail from "@/views/process/commonComponents/commonMachineDetail";

	export default {
		name: "diffuseDetail",
		components: {commonMachineDetail},
	}
</script>

<style lang="scss">
	#diffuse-detail {
		.hover-grey {
			&:hover {
				background-color: grey;
			}
		}

		.row-header {
			background-color: #e2e2e2;
		}
	}
</style>
