export default {
	state: {
		sidebar: {
			open: true,
		}
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			state.sidebar.open = !state.sidebar.open;
		},
	}
}
