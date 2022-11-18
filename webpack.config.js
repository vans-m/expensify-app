const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
	const isProduction = env.production

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		plugins: [new MiniCssExtractPlugin()],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['transform-class-properties']
						}
					}
				},
				{
					test: /\.s?css$/i,
					use: [
						!isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } }
					]
				}
			]
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			static: {
				directory: path.resolve(__dirname, 'public')
			},
			historyApiFallback: true
		}
	}
}
