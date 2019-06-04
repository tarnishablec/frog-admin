<template>
	<div class="home">
		<img alt="Vue logo" src="../../../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<div v-for="i in 20" :key="i">
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
