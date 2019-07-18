<template>
	<div id="home">
		<img alt="Vue logo" src="../../../assets/logo.svg" width="200" height="200">
		<div>
			<el-button type="info" @click="goRepo">Github Repo</el-button>
			<el-button type="success" @click="goEcharts">ECharts</el-button>
			<el-button type="primary" @click="goEle">Element Ui</el-button>
			<el-button type="warning" @click="goRx">VueRx</el-button>
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
			},
			goEle(){
				window.open('https://element.eleme.cn/#/en-US');
			},
			goEcharts(){
				window.open('https://echarts.baidu.com/examples/');
			},
			goRx(){
				window.open('https://github.com/vuejs/vue-rx');

			}
		}
	}
</script>

<style lang="scss" scoped>
	#home {
		text-align: center;

		& > div {
			margin: 50px 0;
		}
	}

	#github-link {
	}
</style>
