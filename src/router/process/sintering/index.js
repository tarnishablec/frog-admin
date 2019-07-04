const sintering = {
	path: 'sintering',
	name: 'sintering',
	redirect: '/process/sintering/dashboard',
	component: () => import('@/views/process/sintering'),
	children: [
		{
			path: 'dashboard',
			name: 'sinteringDashboard',
			hidden: true,
			component: () => import('@/views/process/sintering/dashboard')
		},
		// {
		// 	path: 'detail/:machineId',
		// 	name: 'sinteringDetail',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/sintering/detail')
		// },
		// {
		// 	path: 'alarm/:machineId',
		// 	name: 'sinteringAlarm',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/sintering/alarm')
		// },
		// {
		// 	path: 'pointCheck/:machineId',
		// 	name: 'sinteringPointCheck',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/sintering/pointCheck')
		// },
	]
};
export default sintering;
