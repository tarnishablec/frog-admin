<template>
	<div>
		<h1>A new awesome solution for passing params among routes</h1>
		<h4>support refresh page</h4>
		<el-button @click="$jumpTo('/about/a/c',{param1:input1,param2:input2 })">JumpToC with params</el-button>
		<div>
			param1:
			<el-input v-model="input1"/>
			param2:
			<el-input v-model="input2"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "bb",
		data() {
			return {
				input1: 'no more',
				input2: 'vue router params',
			}
		}
	}
</script>

<style scoped>
	.el-input {
		width: 200px;
	}
</style>
