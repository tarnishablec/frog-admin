const etch = {
	path: 'etch',
	name: 'etch',
	redirect: '/process/etch/dashboard',
	component: () => import('@/views/process/etch'),
	children: [
		{
			path: 'dashboard',
			name: 'etchDashboard',
			hidden: true,
			component: () => import('@/views/process/etch/dashboard')
		},
		{
			path: 'detail/:machineId',
			name: 'etchDetail',
			props: true,
			hidden: true,
			component: () => import('@/views/process/etch/detail')
		},
		{
			path: 'alarm/:machineId',
			name: 'etchAlarm',
			props: true,
			hidden: true,
			component: () => import('@/views/process/etch/alarm')
		},
		{
			path: 'pointCheck/:machineId',
			name: 'etchPointCheck',
			props: true,
			hidden: true,
			component: () => import('@/views/process/etch/pointCheck')
		},
		{
			path: 'chemical/:machineId',
			name: 'etchChemical',
			hidden: true,
			component: () => import('@/views/process/etch/chemical')
		},
	]
};
export default etch;
