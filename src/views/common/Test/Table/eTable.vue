<template>
	<fr-table v-loading="$asyncComputed.commentData.updating" :data="commentData" :columns="columns" alignment="center"
	          show-overflow-tooltip index pagination/>
</template>

<script>
	export default {
		name: "eTable",
		data() {
			return {
				columns: ['postId', 'id', 'name', 'email', 'body'],
			}
		},
		asyncComputed: {
			async commentData() {
				return (await this.$axios.get('https://jsonplaceholder.typicode.com/comments')).data;
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
