import router, {cleanRouter, fullRouter} from '@/router'
import fullRoutes from '@/router/fullRoutes'

const roleMap = {
	root: -1,
	admin: 0,
	user: 2,
};

const permission = {
	state: {
		role: "root",
		permittedRoutes: fullRoutes,
	},
	mutations: {
		prepareRoutes: state => {
			state.permittedRoutes = filterAsyncRoutes(fullRouter, state.role);
		},

		switchRole: (state, r) => {
			state.role = r;
		}
	},
	actions: {
		UPDATE_ROUTES: ({commit, state}) => {
			cleanRouter(router);
			commit('prepareRoutes');
			router.addRoutes(state.permittedRoutes);
			return router;
		},
	}
};

function hasPermission(route, role) {
	if (route.meta && route.meta.role) {
		return roleMap[route.meta.role] >= roleMap[role];
	} else {
		return true;
	}
}

function filterAsyncRoutes(routes, role) {
	let temp = [...routes];
	return temp.filter(route => {
		if (hasPermission(route, role)) {
			if (route['children']) {
				filterAsyncRoutes(route['children'])
			}
			return true;
		}
		return false;
	});
}


export default permission;
