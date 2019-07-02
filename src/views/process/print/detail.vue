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
						<td colspan="5"><span>perc_set_point</span></td>
						<td colspan="5"><span>temp</span></td>
						<td><span>D_temp_set_point</span></td>
						<td><span>D_temp</span></td>
						<td><span>Exhausting_gas_temp</span></td>
						<td><span>Fan_In</span></td>
						<td><span>Fan_out</span></td>
					</tr>
					<tr>
						<td></td>
						<td v-for="i in 5"><span>A{{i}}</span></td>
						<td v-for="i in 5"><span>A{{i}}</span></td>
					</tr>
					</thead>
					<tbody>
					<tr v-for="row in rows">
						<td><span>{{`Oven${row.oven}_Side${row.side}`}}</span></td>
						<td v-for="i in 5">
							<span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`][`Zone_A${i}_perc_set_point`]}}</span>
						</td>
						<td v-for="i in 5">
							<span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`][`Zone_A${i}_temp`]}}</span>
						</td>
						<td><span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Exhausting_gas_temp']}}</span></td>
						<td><span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Zone_D_temp']}}</span></td>
						<td><span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Zone_D_temp_set_point']}}</span></td>
						<td><span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Fan_In']}}</span></td>
						<td><span>{{printDetail[`Oven${row.oven}`][`Side${row.side}`]['Fan_out']}}</span></td>
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
