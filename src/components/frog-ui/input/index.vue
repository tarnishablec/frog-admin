<template>
	<input class="fr-input"
	       :type="type"
	       :readonly="readonly"
	       :placeholder="placeholder"
	       :value="value"
	       @input="$emit('input',$event.target.value)"/>
</template>

<script>
	export default {
		name: "frInput",
		props: {
			value: {
				type: String,
			},
			placeholder: {
				type: String,
			},
			tip: {
				type: String,
			},
			type: {
				type: String,
			},
			readonly: {
				type: Boolean,
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
