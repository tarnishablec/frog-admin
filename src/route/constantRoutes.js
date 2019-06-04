const constantRoutes = [
	{
		path: '/',
		name: 'home',
		components: {
			default: () => import('@/views/common/Home/index'),
			tip: () => import('@/views/common/Home/tip')
		}
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/common/About')
	},
	{
		path: '/playground',
		name: 'playground',
		components: {
			default: () => import('@/views/common/Playground/index'),
			tip: () => import('@/views/common/Playground/tip')
		}
	}
];

export default constantRoutes;
