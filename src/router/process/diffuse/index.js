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
		},
		{
			path: 'detail/:machineId',
			name: 'diffuseDetail',
			props: true,
			hidden: true,
			component: () => import('@/views/process/diffuse/detail')
		},
		{
			path: 'alarm/:machineId',
			name: 'diffuseAlarm',
			props: true,
			hidden: true,
			component: () => import('@/views/process/diffuse/alarm')
		},
		{
			path: 'pointCheck/:machineId',
			name: 'diffusePointCheck',
			props: true,
			hidden: true,
			component: () => import('@/views/process/diffuse/pointCheck')
		},
	]
};
export default diffuse;
