import webpack from 'webpack'
import path from 'path'
import fs from 'fs'

const isServer = process.env.APP_ENV === 'server'

const nodeModules = {};
if(isServer){
	fs.readdirSync('node_modules')
	  .filter(x => ['.bin'].indexOf(x) === -1)
	  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod)
}

const config = {
	entry: {
		[isServer ? 'server' : 'index']: isServer ? './index.js' : "./client/src/index.js"
	},
	target: isServer ? 'node' : 'web',
	output: {
		path: path.join(__dirname, isServer ? './' : './client/dest'),
		filename: '[name].js'
	},
	externals: nodeModules,
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