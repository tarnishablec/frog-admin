import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'
import dynamicRoutes from './dynamicRoutes'
import store from '@/store'

Vue.use(Router);

export function initRoutes(routes) {
	return new Router({
		routes: routes,
	});
}

export function cleanRouter(route) {
	route.matcher = new Router([]).matcher; // reset router
}

export function routeEureka(paths, routes) {
	let tempPaths = [...paths];
	let index = indexOfPath(tempPaths.shift(), routes);
	if (index < 0) {
		return false
	} else if (tempPaths.length !== 0) {
		return routeEureka(tempPaths, routes[index].children)
	} else {
		return true;
	}
}

export function indexOfPath(path, routes) {
	let routeArr = [];
	for (let route of routes) {
		routeArr.push(route.path);
	}
	return routeArr.indexOf(path);
}

export function pathToArray(path) {
	let arr = path.split('/');
	arr.splice(0, 1);
	if (arr[0] === '') {
		return ['/']
	} else {
		arr[0] = '/' + arr[0];
	}
	return arr;
}

export const fullRouter = constantRoutes.concat(dynamicRoutes);

const _router = initRoutes(fullRouter);

_router.beforeEach(((to, from, next) => {
	console.log(_router);
	if (!routeEureka(pathToArray(to.path), fullRouter)) {
		return next('/error/404')
	} else if (!routeEureka(pathToArray(to.path), store.state.permission.permittedRoutes)) {
		return next('/error/403')
	}
	next();
}));

export default _router;
