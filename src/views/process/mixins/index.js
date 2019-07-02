export const tableStyleByStatus = {
	methods: {
		cellClass({row, column}) {
			if (column.type === 'index') {
				if (row.status === 'Productive Time') {
					return 'PT'
				}
				if (row.status === 'Standby Time') {
					return 'ST'
				}
				if (row.status === 'Unscheduled Downtime') {
					return 'UD'
				}
				if (row.status === 'No Communication') {
					return 'NC'
				}
			}
		}
	}
};

export const gridStyleByStatus = {
	methods: {
		cellClass({row, column}) {
			if (column.property === 'status') {
				if (row.status === 'Productive Time') {
					return 'PT'
				}
				if (row.status === 'Standby Time') {
					return 'ST'
				}
				if (row.status === 'Unscheduled Downtime') {
					return 'UD'
				}
				if (row.status === 'No Communication') {
					return 'NC'
				}
			}
		}
	}
};

export const codeToPath = {
	computed: {
		path() {
			let name = '';
			switch (this.workCellCode) {
				case 'BT':
					name = 'texture';
					break;
				case 'DF':
					name = 'diffuse';
					break;
				case 'HF':
					name = 'etch';
					break;
				case 'TA':
					name = 'anneal';
					break;
				case 'PR':
					name = 'perc';
					break;
				case 'PE':
					name = 'pecvd';
					break;
				case 'PT':
					name = 'print';
					break;
				case 'FF':
					name = 'sintering';
					break;
				default:
					name = 'none'
			}
			return `/process/${name}`;
		}
	}
};
