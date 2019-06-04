export default {
	state: {
		sidebar: {
			open: true,
		},
		tipbar: {
			open: true,
		}
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			state.sidebar.open = !state.sidebar.open;
		},
		TOGGLE_TIPBAR: state => {
			state.tipbar.open = !state.tipbar.open;
		},
	}
}
