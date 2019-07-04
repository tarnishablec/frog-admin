export function dateToString(date) {
	let _date = new Date(date);
	return _date.getFullYear() + "-" + addZeroIfSingle(_date.getMonth() + 1) + "-" + addZeroIfSingle(_date.getDate()) + " " + addZeroIfSingle(_date.getHours()) + ":" + addZeroIfSingle(_date.getMinutes()) + ":" + addZeroIfSingle(_date.getSeconds());
}

export function stringToDate(date) {
	date = date.substring(0, 19);
	date = date.replace(/-/g, '/');
	return new Date(date);
}

function addZeroIfSingle(num) {
	if (num < 10) {
		return '0' + num;
	} else {
		return num;
	}
}
