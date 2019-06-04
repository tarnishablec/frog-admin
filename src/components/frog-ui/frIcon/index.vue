<template>
	<svg v-if="icon" class="icon" aria-hidden="true">
		<use :href="'#ant-'+icon"></use>
	</svg>
</template>

<script>
	export default {
		name: "frIcon",
		props: {
			icon: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style scoped>

</style>
