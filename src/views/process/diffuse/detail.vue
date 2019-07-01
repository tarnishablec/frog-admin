<template>
	<common-tube-detail work-cell-code="DF"/>
</template>
<script>


	import CommonTubeDetail from "@/views/process/commonComponents/commonTubeDetail";

	export default {
		name: "diffuseDetail",
		components: {CommonTubeDetail},
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
