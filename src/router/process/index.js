import texture from './texture'
import diffuse from './diffuse'

const process = {
	path: '/process',
	name: 'process',
	component: () => import('../../views/process'),
	meta:{
		icon:'CodeSandbox'
	},
	children: [
		texture,
		diffuse
	]
};

export default process;
