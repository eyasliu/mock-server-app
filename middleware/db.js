import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import path from 'path'
import _ from 'lodash'
import config from '../config'

const defaults = {
	apis: {
		'/example': {
			example: "@name"
		}
	},
	description: {}
}

export class DB {
	constructor(dbName = 'basic', basePath){
		this.dbPath = path.join(basePath, ~dbName.indexOf('json') ? dbName : dbName + '.json');
		this.db = low(this.dbPath, {storage})
		this.db.defaults(defaults).value()
		this.apis = this.db.get('apis')
	}
}

export default basePath => async (context, next) => {
	const {host} = context;
	const dbName = ((host.substring(0, host.indexOf(config.domain) - 1)) || 'basic') + '.json'
	context.db = new DB(dbName, basePath)
	await next()
}