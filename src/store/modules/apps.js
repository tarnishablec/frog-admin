export default {
	state: {
		title: 'Frog Admin',
		sidebar: {
			open: true,
		},
		tipbar: {
			open: false,
		},
		mainScroll: true,
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			state.sidebar.open = !state.sidebar.open;
		},
		TOGGLE_TIPBAR:
			state => {
				state.tipbar.open = !state.tipbar.open;
			},
	}
}
