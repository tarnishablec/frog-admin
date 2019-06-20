<template>
	<div>
		<span v-if="!inputOn" @click="switchInput">{{value}}</span>
		<el-input v-if="inputOn" v-model="currentValue" @input="handleInput"/>
	</div>
</template>

<script>
	export default {
		name: "editableText",
		props: {
			editable: Boolean,
			value: {},
		},
		data() {
			return {
				inputOn: false,
				currentValue: this.value,
		}
		},
		methods: {
			switchInput() {
				if (this.editable) {
					this.inputOn = true;
				}
			},
			handleInput() {
				this.$emit('input', this.currentValue);
			}
		}
	}
</script>

<style scoped>

</style>
