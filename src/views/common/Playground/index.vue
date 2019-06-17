<template>
	<section id="playground">
		<h1>Playground</h1>
		<tr v-for="(name,index) in list">
			<td>{{name}}</td>
			<td >
				<button @click="list.splice(index,1)">delete</button>
			</td>
		</tr>
	</section>
</template>

<script>
	export default {
		name: "playground",
		data(){
			return{
				list:['盖伦','提莫','祈求者'],
			}
		}
	}
</script>

<style scoped>

</style>
