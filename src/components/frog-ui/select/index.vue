<template>
	<label>
		<select class="fr-input fr-select" value="a">
			<option v-for="d in data">{{d}}</option>
		</select>
	</label>
</template>

<script>

	export default {
		name: "frSelect",
		props: {
			multiple: {
				type: Boolean,
			},
			data: {
				type: Array,
				required: true,
			}
		}
	}
</script>

<style lang="scss" scoped>
	label {
		&::after {
			content: '\25bc';
			top: 0;
			right: 0;
			bottom: 0;
		}
		select {
			appearance: none;
		}
	}

</style>
