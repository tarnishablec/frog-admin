<template>
	<div id="home">
		<img alt="Vue logo" src="../../../assets/logo.svg" width="200" height="200">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<div v-for="i in 30" :key="i">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, inventore, numquam. Accusamus accusantium
			blanditiis deleniti ducimus facilis, iure maxime, odio officiis omnis optio provident quo ratione reprehenderit
			soluta sunt temporibus?
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'home',
		components: {
			HelloWorld
		}
	}
</script>

<style scoped>
	#home{
		text-align: center;
	}
</style>
