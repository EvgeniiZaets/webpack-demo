let path = require('path')

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			}
		]
	}
}

module.exports = (env, options) => {
	let isProduction = options.mode === 'production';

	conf.devtool = isProduction
		? 'source-map' // set "false" if you want to disable sourcemap on production
		: 'eval-sourcemap';

	return conf;
};