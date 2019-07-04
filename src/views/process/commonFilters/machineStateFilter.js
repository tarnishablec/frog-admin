export function machineStateFilter(status) {
	let res = '';
	switch (status) {
		case 'Productive Time':
			res = 'PT';
			break;
		case 'Standby Time':
			res = 'ST';
			break;
		case 'Unscheduled Downtime':
			res = 'UD';
			break;
		case 'No Communication':
			res = 'NC';
			break;
		default:
			res = 'NULL'
	}
	return res;
}
