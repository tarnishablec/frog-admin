const pecvd = {
	path: 'pecvd',
	name: 'pecvd',
	redirect: '/process/pecvd/dashboard',
	component: () => import('@/views/process/pecvd'),
	children: [
		{
			path: 'dashboard',
			name: 'pecvdDashboard',
			hidden: true,
			component: () => import('@/views/process/pecvd/dashboard')
		},
		// {
		// 	path: 'detail/:machineId',
		// 	name: 'pecvdDetail',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/pecvd/detail')
		// },
		// {
		// 	path: 'alarm/:machineId',
		// 	name: 'pecvdAlarm',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/pecvd/alarm')
		// },
		// {
		// 	path: 'pointCheck/:machineId',
		// 	name: 'pecvdPointCheck',
		// 	props: true,
		// 	hidden: true,
		// 	component: () => import('@/views/process/pecvd/pointCheck')
		// },
	]
};
export default pecvd;
