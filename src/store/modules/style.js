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
			transitionDuring: 0.3,
			sidebar: {
				openWidth: 200,
				hideWidth: 64,
				bgc: '#2a3642',
			},
			toolbar: {
				height: 60,
			},
			tipbar: {
				width: 300,
				bgc: '#f1f1f2',
			}
		}
	},
	getters: {
		STYLE_VARIABLES: (state, getters, rootState, rootGetters) => {
			return {
				'--background-color': state.vars.backgroundColor,
				'--transition-during': state.vars.transitionDuring + 's',

				'--sidebar-width': (rootGetters.sidebarOpen ? state.vars.sidebar.openWidth : state.vars.sidebar.hideWidth) + 'px',

				'--sidebar-bgc': state.vars.sidebar.bgc,
				'--toolbar-height': state.vars.toolbar.height + 'px',

				'--tipbar-width': state.vars.tipbar.width + 'px',
				'--tipbar-bgc': state.vars.tipbar.bgc,
			}
		}
	}
}
