const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {app: './src/index.js'},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.js',
		publicPath: '/build'
	},

	plugins: [
       new MiniCssExtractPlugin({
         filename: 'build.css',
         chunkFilename: 'build.css',
       }),
     ],

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/mode-modules/'
			},
			{
	          test: /\.css$/,
	          use: [
	            {
	              loader: MiniCssExtractPlugin.loader,
	              options: {
	                publicPath: '../',
	                hmr: process.env.NODE_ENV === 'development',
	              },
	            },
	            'css-loader',
	          ],
	        },
		]
	},

	devServer: {
		overlay : true
	},

}
