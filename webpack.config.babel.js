import webpack from 'webpack'
import path from 'path'

const config = {
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
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
	        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
	    })
	]
}
if(process.env.NODE_ENV === 'production'){
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }))
}
export default config