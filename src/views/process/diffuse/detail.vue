<template>
	<div id="diffuse-detail">
		<el-table :data="machineTubeList" ref="table" :height="tableHeight" @cell-click="showDialog"
		          :cell-class-name="hoverCell">
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column" align="center"
			                 show-overflow-tooltip/>
		</el-table>
		<el-dialog title="	History Data" :visible.sync="dialog" :modal-append-to-body='false' width="90%">
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
		name: "diffuseDetail",
		components: {DateTimePicker},
		data() {
			return {
				columns: ['prop', 'Tube1', 'Tube2', 'Tube3', 'Tube4', 'Tube5'],
				tableHeight: 0,
				dialog: false,
				dialogData: [],
			}
		},
		methods: {
			showDialog(row, column) {
				if (column.property !== 'prop')
					this.dialog = true;
			},
			searchData() {
				let date = this.$refs.datePicker.date;
				common.postMachineParameterHisDataFromCommon({
					endTime: dateToString(date[1]),
					machineId: this.$route.params.machineId,
					paramId: "Tube1_T_Spike_Cent_LZ_Actual",
					startTime: dateToString(date[0]),
					workCellCode: "DF",
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
			this.tableHeight = window.innerHeight - 100;
		},
		asyncComputed: {
			async machineTubeList() {
				let tubeList = (await common.getMachineInfoFromCommon({
					workCellCode: 'DF',
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
							val[name] = param[prop];
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
				return res;
			}
		}
	}
</script>

<style lang="scss">
	#diffuse-detail {
		.hover-grey {
			&:hover {
				background-color: grey;
			}
		}

		.row-header {
			background-color: #e2e2e2;
		}
	}
</style>
