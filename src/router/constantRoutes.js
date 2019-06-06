import error from './error'

const constantRoutes = [
	{
		path: '/',
		name: 'home',
		components: {
			default: () => import('@/views/common/Home/index'),
			tip: () => import('@/views/common/Home/tip')
		},
		meta: {
			icon: 'ant-home'
		}
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/common/About/index'),
		meta: {
			icon: 'ant-info-circle',
			role: 'root',
		},
		children:[
			{
				path:'a',
				name:'a',
				component:()=>import('@/views/common/About/a'),
				children:[
					{
						path:'b',
						name:'b',
						component:()=>import('@/views/common/About/b')
					}
				]
			}
		]
	},
	{
		path: '/playground',
		name: 'playground',
		components: {
			default: () => import('@/views/common/Playground/index'),
			tip: () => import('@/views/common/Playground/tip')
		},
		meta: {
			icon: 'ant-earth',
			sideName: 'play'
		}
	},
	error,
];

export default constantRoutes;
