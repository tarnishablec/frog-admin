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
