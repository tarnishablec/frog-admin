import error from './error'
import dynamicRoutes from './dynamicRoutes'

const fullRoutes = [
	{
		path: '/',
		name: 'home',
		components: {
			default: () => import('@/views/common/Home/index'),
			tip: () => import('@/views/common/Home/tip')
		},
		meta: {
			icon: 'home'
		}
	},
	...dynamicRoutes,
	{
		path: '/icons',
		name: 'icons',
		components: {
			default: () => import('@/views/common/Icon/index'),
			tip: () => import('@/views/common/Icon/tip')
		},
		meta: {
			icon: 'crown',
		}
	},
	error,
];

export default fullRoutes;
