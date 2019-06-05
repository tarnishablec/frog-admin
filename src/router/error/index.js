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
		}
	]
};

export default error;
