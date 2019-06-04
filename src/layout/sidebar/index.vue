<template>
	<div id="sidebar">

	</div>
</template>

<script>
	export default {
		name: "sidebar"
	}
</script>

<style lang="scss" scoped>
	#sidebar {
		flex-shrink: 0;
		transition: width 0.3s;
		background-color: var(--sidebar-bgc);
		width: var(--sidebar-width);
	}
</style>
