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

export function isAllowed(path, routes) {
	let arr = path.split('/');
	arr[0] = '/' + arr[0];
	for (let i = 0; i < arr.length; i++) {

	}
}

const _router = initRoutes(constantRoutes.concat([...dynamicRoutes]));

_router.beforeEach(((to, from, next) => {
	if (to.matched.length === 0) {
		console.log('404 not found!');
		return next('/error/404')
	} else if (store.getters.routes) {
		return next('/error/403')
	}
	next();
}));

export default _router;
