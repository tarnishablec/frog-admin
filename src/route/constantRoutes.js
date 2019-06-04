const constantRoutes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/common/Home')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/common/About')
	},
	{
		path: '/playground',
		name: 'playground',
		component: () => import('@/views/common/Playground')
	}
];

export default constantRoutes;
