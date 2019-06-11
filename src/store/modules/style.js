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
			backgroundColor: '#f0f0f1',
			transitionDuring: 0.3,
			sidebar: {
				openWidth: 200,
				hideWidth: 64,
				bgc: '#393942',
				activeTextColor: '#ffb286',
				beforeColor: '#ff5533'
			},
			toolbar: {
				height: 55,
			},
			tipbar: {
				width: 300,
				bgc: '#a2a2a3',
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
				'--sidebar-before-color': state.vars.sidebar.beforeColor,
			}
		}
	}
}
