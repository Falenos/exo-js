const path = require('path');
const constants = require('./constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(constants.paths.src, 'app.js'),
	},
	output: {
		path: path.resolve(constants.paths.root, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [new HtmlWebpackPlugin({
		title: "Who's Github",
		template: path.resolve(constants.paths.src, 'index.html'),

	})],
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
		symlinks: false,
	},
	module: {
		rules: [].concat(
			{
				test: /\.jsx?$/,
				include: [
					constants.paths.src,
				],
				use: {
					loader: 'babel-loader',
					options: {cacheDirectory: true},
				},
			},
			{
				test: /\.s?css$/,
				include: [
					constants.paths.src,
				],
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'},
				],
			}
		),
	},
	devServer: {
		disableHostCheck: true, // fixes wp-dev-server issue
	},
};