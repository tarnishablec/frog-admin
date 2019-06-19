<template>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci consequatur consequuntur pariatur quidem rerum. Cumque eaque eos explicabo libero placeat quia quidem tempore? A ab ea necessitatibus nostrum ut?
		</span>
		<div>
			{{da}}
		</div>
	</div>
</template>

<script>
	export default {
		name: "tip",
		data() {
			return {
				da: null,
			}
		},
		mounted() {
			this.$axios.get("http://172.16.10.97:8080/hello").then(res => {
				this.da = res.data;
			})
		}
	}
</script>

<style scoped>

</style>
