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
		STYLE_VARIABLES: (state) => {
			return {

				'--toolbar-height': state.vars.toolbar.height + 'px',

				'--tipbar-width': state.vars.tipbar.width + 'px',
				'--tipbar-bgc': state.vars.tipbar.bgc,
			}
		}
	}
}
