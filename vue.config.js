const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/frog-admin/'
		: '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

	devServer: {
		proxy: {
			'/api1': {
				target: 'http://172.16.10.37:8008/',
				changeOrigin: true,
			}
		}
	},
	runtimeCompiler: true
};
