<template>
	<table>
		<tr id="texture-detail-header">
			<td v-for="i in 14">
				<span>{{i}}</span>
				<br/>
				<span>{{headerList[i-1]}}</span>
			</td>
		</tr>
	</table>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "textureMachineDetail",
		data() {
			return {
				headerList: ['Start Position', 'SDR', 'PSC1', 'Rinse', 'Texture', 'Rinse', 'Texture', 'PSC1', 'Rinse', 'HT/HCL clean', 'HV-Dryer', 'WAD', 'WAD', 'End position'],
				machineState: null,
			}
		},
		mounted() {
			console.log(this.$router.currentRoute);
			common.getMachineInfoFromCommon({
				workCellCode: 'BT',
				machineId: this.$routeState.process.texture.detail.machineId,
			})
		}
	}
</script>

<style lang="scss" scoped>
	table {
		tr#texture-detail-header {
			td {
				background-color: grey;
			}
		}

		td {
			text-align: center;

			span {
				white-space: nowrap;
				line-height: 2rem;
				margin: 0 2rem;
				font-weight: bold;
			}
		}
	}

</style>
