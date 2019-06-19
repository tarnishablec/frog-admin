<template>
	<div id="texture-dashboard">
		<fr-table :data="textureMachineList" full-load/>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureDashboard",
		asyncComputed: {
			async textureMachineList() {
				return (await common.getMachineListByCodeFromCommon({
					workCellCode: 'BT',
				})).data;
			}
		}
	}
</script>

<style scoped>

</style>
