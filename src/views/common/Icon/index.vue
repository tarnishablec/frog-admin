<template>
	<div id="icon-page">
		<h1>click to copy!</h1>
		<div id="icon-container">
			<div v-for="i in iconList" @click="doCopy(i)">
				<fr-icon :icon="i"/>
				<span>{{i}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import icons from './icons.js'
	import FrIcon from "@/components/frog-ui/icon/index";

	export default {
		name: "index",
		components: {FrIcon},
		computed: {
			iconList() {
				return icons.map((a) => {
					return a.replace(/\s*/g, "")
				})
			}
		},
		methods: {
			doCopy(text) {
				this.$copyText(text).then(() => {
					this.$message({
						message: `icon ${text} has been copied!`,
						type: 'success',
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#icon-page {
		padding: 10px;
		text-align: center;

		h1 {
			margin-top: 0;
		}

		#icon-container {
			display: flex;
			flex-wrap: wrap;
			border: 1px solid grey;
			border-radius: 4px;

			& > div {
				width: 100px;
				display: flex;
				flex-direction: column;
				text-align: center;
				justify-content: center;
				align-items: center;
				border-radius: 4px;
				margin: 10px;

				&:hover {
					box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
				}

				span {
					margin: 0 5px 10px 5px;
				}

				.fr-icon {
					width: 50px;
					height: 50px;
					padding: 10px;
				}
			}
		}
	}

</style>
