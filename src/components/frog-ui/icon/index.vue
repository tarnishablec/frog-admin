<template>
	<svg v-if="icon" class="fr-icon" aria-hidden="true" :style="wh">
		<use :href="'#'+icon"></use>
	</svg>
</template>

<script>
	export default {
		name: "frIcon",
		props: {
			icon: {
				type: String,
				required: true,
			},
			size: {
				type: String,
				default: 'default',
			},
		},
		computed: {
			fs() {
				if (this.size === 'large') {
					return '3rem'
				}
				if (this.size === 'default') {
					return '1.7rem'
				}
				if (this.size === 'mid') {
					return '1.5rem'
				}
				if (this.size === 'small') {
					return '1rem';
				} else {
					return '1.7rem';
				}
			},
			wh() {
				return {
					width: this.fs,
					height: this.fs,
				}
			}
		}
	}
</script>

<style scoped>

</style>
