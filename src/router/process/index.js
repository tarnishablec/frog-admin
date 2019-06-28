import texture from './texture'
import diffuse from './diffuse'
import etch from './etch'
import anneal from './anneal'
import perc from './perc'
import pecvd from './pecvd'
import print from './print'

const process = {
	path: '/process',
	name: 'process',
	component: () => import('../../views/process'),
	meta: {
		icon: 'CodeSandbox'
	},
	children: [
		texture,
		diffuse,
		etch,
		anneal,
		perc,
		pecvd,
		print,
	]
};

export default process;
