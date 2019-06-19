const texture = {
	path: 'texture',
	name: 'texture',
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
