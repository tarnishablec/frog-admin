<template>
	<div id="home">
		<img alt="Vue logo" src="../../../assets/logo.svg" width="200" height="200">
		<div>
			<el-button type="success" @click="goRepo">GITHUB REPO</el-button>
		</div>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'home',
		components: {
			HelloWorld
		},
		methods: {
			goRepo() {
				window.open('https://github.com/tarnishablec/frog-admin');
			}
		}
	}
</script>

<style lang="scss" scoped>
	#home {
		text-align: center;
	}

	#github-link {
	}
</style>
