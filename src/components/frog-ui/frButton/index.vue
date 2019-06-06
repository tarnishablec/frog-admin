<template>
	<button class="fr-button" @click="!disabled? $emit('click'):''" @mouseover="!disabled?$emit('mouseover'):''" :style="sty"
	        :class="[{outline:outline},{disabled:disabled}]">
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
	.fr-button {
		border-radius: 4px;
		color: var(--button-text-color);
		background: var(--button-color);
		border: 1px solid var(--button-border-color);
		padding: 9px 20px;
		overflow: hidden;
		transition: 0.2s;
		white-space: nowrap;

		&:focus {
			outline: none;
		}

		&:hover {
			cursor: pointer;

			&:not(.outline):not(.disabled) {
				filter: brightness(85%);
			}

			&.outline:not(.disabled) {
				background: var(--button-text-color);
				color: white;
			}
		}

		&:active:not(.disabled) {
			filter: brightness(60%) !important;
		}
	}
</style>
