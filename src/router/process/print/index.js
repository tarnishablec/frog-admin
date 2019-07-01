const print = {
	path: 'print',
	name: 'print',
	redirect: '/process/print/dashboard',
	component: () => import('@/views/process/print'),
	children: [
		{
			path: 'dashboard',
			name: 'printDashboard',
			hidden: true,
			component: () => import('@/views/process/print/dashboard')
		},
		{
			path: 'detail/:machineId',
			name: 'printDetail',
			props: true,
			hidden: true,
			component: () => import('@/views/process/print/detail')
		},
		// {
		// 	path: 'alarm/:machineId',
		// 	name: 'printAlarm',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/print/alarm')
		// },
		// {
		// 	path: 'pointCheck/:machineId',
		// 	name: 'printPointCheck',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/print/pointCheck')
		// },
	]
};
export default print;
