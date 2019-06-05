import router, {cleanRouter} from '../../router'
import constantRoutes from '../../router/constantRoutes'
import dynamicRoutes from '../../router/dynamicRoutes'

const roleMap = {
	root: -1,
	admin: 0,
	worker: 2,
};

const permission = {
	state: {
		role: "admin",
		permittedRoutes: constantRoutes,
	},
	mutations: {
		prepareRoutes: state => {
			state.permittedRoutes = filterAsyncRoutes(constantRoutes.concat(dynamicRoutes), state.role);
		},

		switchRole: (state, r) => {
			state.role = r;
		}
	},
	actions: {
		UPDATE_ROUTES: ({commit, state}) => {
			cleanRouter();
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
