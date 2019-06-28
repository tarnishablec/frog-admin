const perc = {
	path: 'perc',
	name: 'perc',
	redirect: '/process/perc/dashboard',
	component: () => import('@/views/process/perc'),
	children: [
		{
			path: 'dashboard',
			name: 'percDashboard',
			hidden: true,
			component: () => import('@/views/process/perc/dashboard')
		},
		// {
		// 	path: 'detail/:machineId',
		// 	name: 'percDetail',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/perc/detail')
		// },
		// {
		// 	path: 'alarm/:machineId',
		// 	name: 'percAlarm',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/perc/alarm')
		// },
		// {
		// 	path: 'pointCheck/:machineId',
		// 	name: 'percPointCheck',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/perc/pointCheck')
		// },
	]
};
export default perc;
