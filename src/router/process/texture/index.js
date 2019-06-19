const texture = {
	path: 'texture',
	name: 'texture',
	redirect: '/process/texture/dashboard',
	component: () => import('@/views/process/texture'),
	children: [
		{
			path: 'dashboard',
			name: 'dashboard',
			hidden: true,
			component: () => import('@/views/process/texture/dashboard')
		}
	]
};

export default texture;
