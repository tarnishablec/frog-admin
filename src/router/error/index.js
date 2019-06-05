const error = {
	path: '/error',
	name: 'error',
	component: () => import('../../views/error'),
	hidden: true,
	children: [
		{
			path: '404',
			name: 'NotFound',
			component: () => import('../../views/error/404')
		},
		{
			path: '403',
			name: 'Forbidden',
			component: () => import('../../views/error/403')
		}
	]
};

export default error;
