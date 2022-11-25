const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = (env) => {
	console.log(env)
	const isProduction = env.production
	const configPath = isProduction ? './.env.development' : './.env.development'
	const envir = dotenv.config({ path: configPath }).parsed
	const envKeys = Object.keys(envir).reduce((prev, next) => {
		prev[next] = JSON.stringify(envir[next])
		return prev
	}, {})

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js',
			publicPath: '/dist/'
		},
		plugins: [new MiniCssExtractPlugin(), new webpack.DefinePlugin(envKeys)],
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
			// publicPath: '/dist/'
		}
	}
}
