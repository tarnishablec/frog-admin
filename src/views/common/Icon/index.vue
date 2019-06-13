<template>
	<div id="icon-page">
		<h1>click icon to copy code!</h1>
		<div id="icon-container">
			<div v-for="i in iconList" @click="doCopyCode(i)">
				<div>
					<fr-icon :icon="i"/>
				</div>
				<div @click.stop="doCopyName(i)">
					<span>{{i}}</span>
				</div>
			</div>
			<div v-for="i in 15" class="placeholder">
			</div>
		</div>
	</div>
</template>

<script>
	import icons from './icons.js'

	export default {
		name: "index",
		computed: {
			iconList() {
				return icons.map((a) => {
					return a.replace(/\s*/g, "")
				})
			}
		},
		methods: {
			doCopyCode(text) {
				let res = `<fr-icon icon="${text}"/>`;
				this.$copyText(res).then(() => {
					this.$message({
						message: `'${res}' has been copied!`,
						type: 'success',
					})
				})
			},
			doCopyName(text) {
				this.$copyText(text).then(() => {
					this.$message({
						message: `${text} has been copied!`,
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
			justify-content: space-around;

			.placeholder {
				width: 120px;
				height: 0;
			}

			& > div {
				width: 120px;
				display: flex;
				flex-direction: column;
				text-align: center;
				justify-content: center;
				align-items: center;
				border-radius: 4px;
				margin: 10px;

				& > div {
					width: 100%;
					&:hover {
						box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
						cursor: pointer;
					}
				}

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
