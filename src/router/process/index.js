import texture from './texture'

const process = {
	path: '/process',
	name: 'process',
	component: () => import('../../views/process'),
	meta:{
		icon:'CodeSandbox'
	},
	children: [
		texture,
	]
};

export default process;
