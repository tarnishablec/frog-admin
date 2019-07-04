export default {
	state: {
		themes: {
			primary: '#3399ff',
			secondary: '#999999',
			success: '#00cc66',
			warning: '#ff9900',
			danger: '#f85555',
		},
		vars: {
			sidebar: {
				openWidth: 200,
				bgc: '#393942',
			},
			toolbar: {
				height: 50,
			},
		}
	},
	getters: {
		STYLE_VARIABLES: (state, getters, rootState, rootGetters) => {
			return {
				'--sidebar-bgc': state.vars.sidebar.bgc,
				'--sidebar-width': (rootGetters.sidebarOpen ? state.vars.sidebar.openWidth : 65) + 'px',
				'--toolbar-height': state.vars.toolbar.height + 'px',
			}
		}
	}
}
