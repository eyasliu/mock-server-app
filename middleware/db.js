import low from 'lowdb'
import storage from 'lowdb/lib/file-async'
import path from 'path'

const defaults = {
	apis: {},
	description: {}
}

export default class DB {
	constructor(dbName = 'basic', basePath = path.join(__dirname, '../')){
		this.dbPath = path.join(basePath, 'db', ~dbName.indexOf('json') ? dbName : dbName + '.json');
		this.db = low(this.dbPath, {storage})
		this.db.defaults(defaults).value()
		this.apis = this.db.get('apis')
	}
}