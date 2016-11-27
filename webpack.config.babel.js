import webpack from 'webpack'
import path from 'path'

export default {
	entry: {
		index: "./client/src/index.js"
	},
	output: {
		path: path.join(__dirname, './client/dest'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
		]
	}
}