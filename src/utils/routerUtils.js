export function hasIcon(route) {
	return route.meta && route.meta.icon;
}

export function hasChildren(route) {
	return route.children && route.children.length > 0;
}

export function hasSideName(route) {
	return route.meta && route.meta.sideName;
}
