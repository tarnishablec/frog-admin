<template>
	<div id="diffuse-detail">
		<el-table :data="machineTubeList" ref="table" :height="tableHeight">
			<el-table-column v-for="column in columns" :key="column" :prop="column" :label="column" align="center"
			                 show-overflow-tooltip/>
		</el-table>
	</div>
</template>

<script>
	import * as common from '@/api/process/common'

	export default {
		name: "diffuseDetail",
		data() {
			return {
				columns: ['prop', 'Tube1', 'Tube2', 'Tube3', 'Tube4', 'Tube5'],
				tableHeight: 0,
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
						if (param.hasOwnProperty(prop) && prop !== ('_id') && prop !== ('MessageType')) {
							let key = prop.replace(reg, '');
							let val = {};
							if (map.has(key)) {
								val = map.get(key);
							}
							if (reg.test(prop)) {
								val[name] = param[prop];
							} else {
								val[name] = param[prop];
							}
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

<style scoped>
</style>
