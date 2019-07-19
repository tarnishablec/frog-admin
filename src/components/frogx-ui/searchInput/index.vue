<template>
	<label>
		<input v-bind="$attrs" :value="value" v-stream:input="input$"/>
	</label>
</template>

<script>
	import {pluck, debounceTime, map, distinctUntilChanged} from 'rxjs/operators'

	export default {
		name: "fxSearchInput",
		props: {
			debounceTime: {
				type: Number,
				default: 0,
			},
			value: null,
		},
		domStreams: ['input$'],
		subscriptions() {
			return {
				value$: this.input$.pipe(
					pluck('event', 'target', 'value'),
					debounceTime(Number(this.debounceTime)),
					distinctUntilChanged(),
					map(v => {
						this.$emit('input', v);
					}),
				)
			}
		}
	}
</script>

<style scoped>

</style>
