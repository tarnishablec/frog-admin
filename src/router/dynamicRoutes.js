const dynamicRoutes = [
	{
		path: '/test',
		name: 'Test',
		components: {
			default: () => import('@/views/common/Test/index'),
		},
		meta: {
			icon: 'ant-formatpainter-fill',
			role: 'root',
		}
	},
];

export default dynamicRoutes;
