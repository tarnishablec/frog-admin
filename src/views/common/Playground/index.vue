<template>
	<section id="playground">
		<h1>Playground</h1>
		<table>
			<tr v-for="(name,index) in list">
				<td>{{name}}</td>
				<td>
					<button @click="deleteByIndex(index)">delete</button>
				</td>
			</tr>
		</table>
	</section>
</template>

<script>
	export default {
		name: "playground",
		data() {
			return {
				list: ['盖伦', '提莫', '祈求者'],
			}
		},
		methods: {
			deleteByIndex(index) {
				this.$confirm('sure?').then(() => {
					this.list.splice(index, 1)
				}).catch(() => {
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
