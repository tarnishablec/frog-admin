export function machineStateFilter(status) {
	let res = '';
	switch (status) {
		case 'Productive Time':
			res = 'PT';
			break;
		case 'Standby Time':
			res = 'ST';
			break;
		default:
			res = 'PT'
	}
	return res;
}
