const texture = {
	path: 'texture',
	name: 'texture',
	redirect: '/process/texture/dashboard',
	component: () => import('@/views/process/texture'),
	children: [
		{
			path: 'dashboard',
			name: 'textureDashboard',
			hidden: true,
			component: () => import('@/views/process/texture/dashboard')
		},
		{
			path: 'detail',
			name: 'textureDetail',
			hidden: true,
			component: () => import('@/views/process/texture/detail')
		}
	]
};

export default texture;
