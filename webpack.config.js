const path = require('path')

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['transform-class-properties'],
					},
				},
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public'),
		},
		historyApiFallback: true,
	},
}
