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
		},
		{
			path: 'alarm',
			name: 'textureAlarm',
			hidden: true,
			component: () => import('@/views/process/texture/alarm')
		},
		{
			path: 'pointCheck',
			name: 'texturePointCheck',
			hidden: true,
			component: () => import('@/views/process/texture/pointCheck')
		},
		{
			path: 'chemical',
			name: 'textureChemical',
			hidden: true,
			component: () => import('@/views/process/texture/chemical')
		},
	]
};

export default texture;
