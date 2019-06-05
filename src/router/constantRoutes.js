import error from './error'

const constantRoutes = [
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
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/common/About'),
		meta: {
			icon: 'info-circle',
			role: 'root',
		}
	},
	{
		path: '/playground',
		name: 'playground',
		components: {
			default: () => import('@/views/common/Playground/index'),
			tip: () => import('@/views/common/Playground/tip')
		},
		meta: {
			icon: 'earth',
			sideName: 'play'
		}
	},
	error,
];

export default constantRoutes;
