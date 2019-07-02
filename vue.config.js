const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	transpileDependencies: [
		'vue-echarts',
		'resize-detector'
	],
	publicPath: process.env.NODE_ENV === 'production'
		? '/vsky-admin/'
		: '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

	devServer: {
		port: 10086,
		proxy: {
			'/process': {
				target: 'http://172.16.10.20:8008',
				changeOrigin: true,
				pathRewrite: {
					'^/process': ''
				}
			}
		}
	},
	runtimeCompiler: true
};
