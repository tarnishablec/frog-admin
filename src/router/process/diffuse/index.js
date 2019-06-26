const diffuse = {
	path: 'diffuse',
	name: 'diffuse',
	redirect: '/process/diffuse/dashboard',
	component: () => import('@/views/process/diffuse'),
	children: [
		{
			path: 'dashboard',
			name: 'diffuseDashboard',
			hidden: true,
			component: () => import('@/views/process/diffuse/dashboard')
		}
	]
};
export default diffuse;
