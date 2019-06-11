<template>
	<div id="error">
		<router-link to="/">
			<el-button>BACK</el-button>
		</router-link>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "error",
	}
</script>

<style scoped>
	#error {
	}
</style>
