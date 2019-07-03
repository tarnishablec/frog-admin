<template>
	<div id="common-table-detail">
		<el-table :data="machineTubeList" ref="table" :height="tableHeight" @cell-click="showDialog"
		          :cell-class-name="hoverCell">
			<el-table-column label="Param" prop="prop" align="center" show-overflow-tooltip/>
			<el-table-column v-for="tube in tubes" :key="tube" :prop="tube" :label="tube" align="center"
			                 show-overflow-tooltip>
				<template slot-scope="scope">
					{{scope.row[tube].value}}
				</template>
			</el-table-column>
		</el-table>
		<el-dialog :visible.sync="dialog" :modal-append-to-body='false' width="90%">
			<div slot="title">
				History Data
				<hr/>
			</div>
			<common-history-chart :params="hisParam" :fields="['time','value']"/>
		</el-dialog>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'
	import CommonHistoryChart from "@/views/process/commonComponents/commonHistoryChart";

	export default {
		name: "commonTubeDetail",
		components: {CommonHistoryChart},
		props: {
			workCellCode: {
				type: String,
				required: true,
			},
			tubes: {
				type: Array,
				default: () => {
					return ['Tube1', 'Tube2', 'Tube3', 'Tube4', 'Tube5'];
				}
			},
			type: {
				type: String,
				default: 'split',
			},
		},
		data() {
			return {
				tableHeight: window.innerHeight - 100,
				dialog: false,
				dialogData: [],
				hisParam: {},
			}
		},
		methods: {
			showDialog(row, column) {
				if (column.property !== 'prop' && row[column.property].canClick) {
					this.hisParam = {
						paramId: row[column.property].raw,
						workCellCode: this.workCellCode,
						machineId: this.$route.params.machineId,
					};
					this.dialog = true;
				}
			},
			hoverCell({column}) {
				if (column.property !== 'prop') {
					return 'hover-grey';
				} else {
					return 'row-header';
				}
			}
		},
		asyncComputed: {
			async machineTubeList() {
				let data = (await common.getMachineInfoFromCommon({
					workCellCode: this.workCellCode,
					machineId: this.$route.params.machineId,
				})).data;
				let map = new Map();
				const reg = /^(Tube\d)_?/;
				if (this.type === 'split') {
					data.tubeList.forEach(tube => {
						let name = `Tube${tube.tubeId}`;
						let status = tube.status.TubeStatus;
						let param = tube.parameter;
						param['status'] = status;
						for (let prop in param) {
							if (param.hasOwnProperty(prop) && prop !== ('_id') && prop !== ('MessageType') && prop !== ('Machineid')) {
								let key = prop.replace(reg, '');
								let val = {};
								if (map.has(key)) {
									val = map.get(key);
								}
								val[name] = {
									raw: prop,
									value: param[prop],
									canClick: /^(Tube\d)_/.test(prop),
								};
								map.set(key, val);
							}
						}
					});
				} else if (this.type === 'noSplit') {
					let param = data.parameter;
					for (let i = 0; i < data.tubeList.length; i++) {
						param[`Tube${i + 1}_status`] = data.tubeList[i].status.TubeStatus;
					}
					for (let p in param) {
						if (param.hasOwnProperty(p)) {
							if (reg.test(p)) {
								let key = p.replace(reg, '');
								let val = {};
								let name = p.match(reg)[1];
								if (map.has(key)) {
									val = map.get(key);
								}
								val[name] = {
									raw: p,
									value: param[p],
									canClick: /^(Tube\d)_/.test(p),
								};
								map.set(key, val);
							}
						}
					}
				}
				let res = [];
				for (let k of map.keys()) {
					let data = map.get(k);
					data.prop = k;
					res.push(data);
				}
				return res;
			}
		}
	}
</script>

<style scoped>

</style>
