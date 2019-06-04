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
			backgroundColor: '#fff',
			sidebar: {
				openWidth: 200,
				hideWidth: 50,
				bgc: '#1d2936',
			},
			toolbar: {
				height: 50,
			}
		}
	},
	getters: {
		STYLE_VARIABLES: (state, getters, rootState, rootGetters) => {
			return {
				'--sidebar-width': (rootGetters.sidebarOpen ? state.vars.sidebar.openWidth : state.vars.sidebar.hideWidth) + 'px',
				'--sidebar-bgc': state.vars.sidebar.bgc,
				'--toolbar-height': state.vars.toolbar.height + 'px',
				'--background-color': state.vars.backgroundColor,
			}
		}
	}
}
