const dynamicRoutes = [
	{
		path: '/test',
		name: 'test',
		components: {
			default: () => import('@/views/common/Test'),
		},
		meta: {
			icon: 'formatpainter-fill',
			role: 'root',
		}
	},
];

export default dynamicRoutes;
