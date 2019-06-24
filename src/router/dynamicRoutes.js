const dynamicRoutes = [
	{
		path: '/test',
		name: 'Test',
		components: {
			default: () => import('@/views/common/Test/index'),
		},
		meta: {
			icon: 'formatpainter-fill',
			role: 'root',
		},
		children:[
			{
				path:'table',
				name:'table',
				component:()=>import('@/views/common/Test/Table/eTable')
			},
			{
				path:'chart',
				name:'chart',
				component:()=>import('@/views/common/Test/Chart/')
			}
		]
	},
];

export default dynamicRoutes;
