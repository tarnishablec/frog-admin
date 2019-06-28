export function deepCopy(obj) {
	let result = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object') {
				result[key] = deepCopy(obj[key]);
			} else {
				result[key] = obj[key];
			}
		}
	}
	return result;
}
