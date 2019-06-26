import router from '@/router'
import store from '@/store'

export function hasIcon(route) {
	return route.meta && route.meta.icon;
}

export function hasChildren(route) {
	return route.children && route.children.length > 0;
}

export function hasActiveChildren(route) {
	if (route.children && route.children.length > 0) {
		for (let r of route.children) {
			if (!r.hidden) {
				return true;
			}
		}
		return false;
	}
	return false;
}

export function hasSideName(route) {
	return route.meta && route.meta.sideName;
}

export function pathToArray(path) {
	let arr = path.split('/');
	arr.shift();
	return arr;
}

export function jumpTo(path, data) {
	let arr = pathToArray(path);
	const rs = store.state.routeState;
	if (data){
		setPropRecur(rs, arr, data);
		store.commit('SYNC');
	}
	router.push({
		path: path,
	});
}

export function setPropRecur(obj, arr, data) {
	let shift = arr.shift();
	if (!shift) {
		for (let d in data) {
			if (data.hasOwnProperty(d)) {
				obj[d] = data[d];
			}
		}
		return;
	}
	if (!obj[shift]) {
		obj[shift] = {};
	}
	setPropRecur(obj[shift], arr, data);
}
