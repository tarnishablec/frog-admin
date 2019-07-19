<template>
	<label class="fx-debounce-input">
		<span v-if="title">{{title}}</span>
		<input v-bind="$attrs" :value="value" v-stream:input="input$"
		       @focus="isFocus = true" @blur="isFocus = false"
		       :class="{'is-focus':isFocus}"/>
	</label>
</template>

<script>
	import {pluck, debounceTime, map, distinctUntilChanged} from 'rxjs/operators'

	export default {
		name: "fxDebounceInput",
		props: {
			debounceTime: {
				type: Number,
				default: 300,
			},
			value: null,
			title: null,
		},
		data() {
			return {
				isFocus: false,
			}
		},
		domStreams: ['input$', 'focus$', 'blur$'],
		subscriptions() {
			return {
				state$: this.input$.pipe(
					pluck('event', 'target', 'value'),
					debounceTime(Number(this.debounceTime)),
					distinctUntilChanged(),
					map(v => {
						this.$emit('input', v);
					}),
				),

			}
		}
	}
</script>

<style lang="scss" scoped>
	.fx-debounce-input {
		width: 100%;
		position: relative;
		display: inline-flex;
		align-items: center;

		span {
			margin-right: 1rem;
		}

		input {
			flex: 1;
			display: inline-block;
			height: 40px;
			line-height: 40px;
			border: 1px solid #DCDFE6;
			border-radius: 4px;
			padding: 0 15px;
			box-sizing: border-box;
			color: #606266;
			outline: none;
			font-size: 14px;
			transition: all 0.2s;

			&.is-focus {
				border-color: #409eff !important;
			}
		}
	}
</style>
