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
		<el-dialog title="History Data" :visible.sync="dialog" :modal-append-to-body='false' width="90%">
			<div style="display: flex;justify-content: space-between">
				<date-time-picker ref="datePicker"/>
				<el-button @click="searchData">SEARCH</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'
	import DateTimePicker from "@/components/common/dateTimePicker";
	import {dateToString} from '@/utils/dateUtils'

	export default {
		name: "commonTubeDetail",
		components: {DateTimePicker},
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
			}
		},
		data() {
			return {
				tableHeight: window.innerHeight - 100,
				dialog: false,
				dialogData: [],
				param: '',
			}
		},
		methods: {
			showDialog(row, column) {
				if (column.property !== 'prop' && row.prop !== 'ID' && row[column.property].canClick) {
					this.param = row[column.property].raw;
					this.dialog = true;
				}
			},
			searchData() {
				let date = this.$refs.datePicker.date;
				common.postMachineParameterHisDataFromCommon({
					endTime: dateToString(date[1]),
					machineId: this.$route.params.machineId,
					paramId: this.param,
					startTime: dateToString(date[0]),
					workCellCode: this.workCellCode,
				}).then(res => {
					this.dialogData = res.data;
					console.log(this.dialogData);
				})
			},
			hoverCell({column}) {
				if (column.property !== 'prop') {
					return 'hover-grey';
				} else {
					return 'row-header';
				}
			}
		},
		mounted() {
		},
		asyncComputed: {
			async machineTubeList() {
				let tubeList = (await common.getMachineInfoFromCommon({
					workCellCode: this.workCellCode,
					machineId: this.$route.params.machineId,
				})).data.tubeList;
				let map = new Map();
				const reg = /^(Tube\d)_?/;
				tubeList.forEach(tube => {
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
								canClick: reg.test(prop),
							};
							map.set(key, val);
						}
					}
				});
				let res = [];
				for (let k of map.keys()) {
					let data = map.get(k);
					data.prop = k;
					res.push(data);
				}
				console.log(res);
				return res;
			}
		}
	}
</script>

<style scoped>

</style>
