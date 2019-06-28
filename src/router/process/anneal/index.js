const anneal = {
	path: 'anneal',
	name: 'anneal',
	redirect: '/process/anneal/dashboard',
	component: () => import('@/views/process/anneal'),
	children: [
		{
			path: 'dashboard',
			name: 'annealDashboard',
			hidden: true,
			component: () => import('@/views/process/anneal/dashboard')
		},
		// {
		// 	path: 'detail/:machineId',
		// 	name: 'annealDetail',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/anneal/detail')
		// },
		// {
		// 	path: 'alarm/:machineId',
		// 	name: 'annealAlarm',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/anneal/alarm')
		// },
		// {
		// 	path: 'pointCheck/:machineId',
		// 	name: 'annealPointCheck',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/anneal/pointCheck')
		// },
	]
};
export default anneal;
