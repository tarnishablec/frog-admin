<template>
	<div class="common-chemical">
		<h3>{{title}}</h3>
		<div class="chemical-card-container grid-dashboard">
			<el-card class="chemical-card" v-for="i in 8" :key="i">
				<div slot="header">
				</div>
			</el-card>
		</div>
		<el-card>
			<div slot="header">
				Chemical Consumption
			</div>
			<slot/>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: "commonChemical",
		props: {
			title: {
				type: String,
				default: 'Chemical'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-chemical {
		h3 {
			margin: 0 0 1rem 0;
		}

		.chemical-card-container {
			margin-bottom: 2rem;
		}
	}

</style>
