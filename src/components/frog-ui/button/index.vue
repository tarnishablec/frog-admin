<template>
	<button class="fr-button" @click="$emit('click')" @mouseover="$emit('mouseover')" :style="sty"
	        :class="[{outline:outline},{disabled:disabled}]" :disabled="disabled">
		<slot/>
	</button>
</template>

<script>
	export default {
		name: "frButton",
		props: {
			color: {
				default: '#fff'
			},
			outline: {
				type: Boolean,
			},
			type: {
				default: 'default',
			},
			disabled: {
				type: Boolean,
				default: false,
			}
		},
		computed: {
			sty() {
				let text = this.color;
				let bgc = '#fff';
				let border = this.color;
				let t = this.color;
				text = 'white';
				if (this.type === 'default') {
					text = '#000';
				} else {
					switch (this.type) {
						case 'primary':
							t = this.$themes.primary;
							break;
						case 'secondary':
							t = this.$themes.secondary;
							break;
						case 'success':
							t = this.$themes.success;
							break;
						case 'warning':
							t = this.$themes.warning;
							break;
						case 'danger':
							t = this.$themes.danger;
							break;
						default:
					}
				}
				bgc = t;
				if (this.outline) {
					text = border = t;
					bgc = 'none';
				} else {
					border = t;
					if (this.type === 'default') {
						border = '#dee2e6'
					}
				}
				return {
					'--button-text-color': text,
					'--button-color': bgc,
					'--button-border-color': border,
				};
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
