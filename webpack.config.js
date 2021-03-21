var path = require('path');
var DotenvWebPack = require('dotenv-webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var vendor = [
	'@material-ui/core',
	'@material-ui/icons',
	'@reduxjs/toolkit',
	'axios',
	'prop-types',
	'query-string',
	'react',
	'react-dom',
	'react-redux',
	'react-router-dom'
];
var webpackConfig = {
	entry: {
		bundle: './src/index.jsx',
		vendor
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js?x)$/i,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: { loader: 'file-loader' }
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'$redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit'),
			$components: path.resolve(__dirname, 'src/components'),
			$constants: path.resolve(__dirname, 'src/constants'),
			$features: path.resolve(__dirname, 'src/features'),
			$themes: path.resolve(__dirname, 'src/themes'),
			$hooks: path.resolve(__dirname, 'src/hooks'),
			$api: path.resolve(__dirname, 'src/api')
		}
	},
	plugins: [
		new DotenvWebPack(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './public/assets/img/favicon.ico',
			excludeChunks: ['vendor']
		})
	],
	devServer: {
		historyApiFallback: true
	},
	performance: {
		hints: false
	},
	devtool: 'eval-source-map'
};

module.exports = webpackConfig;
