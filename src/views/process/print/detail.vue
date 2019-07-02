<template>
	<div id="print-detail">
		<el-card>
			<div slot="header">
				Data Status
			</div>
			<div style="overflow-x: scroll">
				<table v-if="printDetail" class="common-detail-grid">
					<thead>
					<tr>
						<td></td>
						<td colspan="5">perc_set_point</td>
						<td colspan="5">temp</td>
						<td>D_temp_set_point</td>
						<td>D_temp</td>
						<td>Exhausting_gas_temp</td>
						<td>Fan_In</td>
						<td>Fan_out</td>
					</tr>
					<tr>
						<td></td>
						<td v-for="i in 5">A{{i}}</td>
						<td v-for="i in 5">A{{i}}</td>
					</tr>
					</thead>
					<tbody>
					<tr v-for="row in rows">
						<td>Oven1_SideA</td>
						<td v-for="i in 5">{{printDetail[`Oven${row.oven}`][`Side${row.side}`][`Zone_A${i}_perc_set_point`]}}</td>
						<td v-for="i in 5">{{printDetail[`Oven${row.oven}`][`Side${row.side}`][`Zone_A${i}_temp`]}}</td>
						<td>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Exhausting_gas_temp']}}</td>
						<td>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Zone_D_temp']}}</td>
						<td>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Zone_D_temp_set_point']}}</td>
						<td>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Fan_In']}}</td>
						<td>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Fan_out']}}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</el-card>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "detail",
		data() {
			return {
				printDetail: null,
				rows: [
					{oven: 1, side: 'A'},
					{oven: 1, side: 'B'},
					{oven: 2, side: 'A'},
					{oven: 2, side: 'B'},

				],
			}
		},
		async mounted() {
			let parameter = (await common.getMachineInfoFromCommon({
				workCellCode: 'PT',
				machineId: this.$route.params.machineId,
			})).data.parameter;
			let res = {
				Oven1: {
					SideA: {},
					SideB: {},
				},
				Oven2: {
					SideA: {},
					SideB: {},
				}
			};
			const reg = /^(Oven\d)_(Side[AB])_(.*)$/;
			for (let param in parameter) {
				if (parameter.hasOwnProperty(param)) {
					let matches = param.match(reg);
					if (matches) {
						res[matches[1]][matches[2]][matches[3]] = parameter[param];
					}
				}
			}
			this.printDetail = res;
		}
	}
</script>

<style lang="scss" scoped>
</style>
