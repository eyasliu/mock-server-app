import "regenerator-runtime/runtime";
import koa from 'koa'
import logger from 'koa-logger'

import db from './middleware/db'
import mock from './middleware/mock'
import api from './middleware/api'
import admin from './middleware/admin'
import cors from './middleware/cors'
import server from 'koa-static'
import bodyparser from 'koa-bodyparser'

import config from './config'

import path from 'path'

const app = new koa()

app.use(logger())
app.use(bodyparser())
app.use(cors('http://portal.wps.cn'))
app.use(db(path.join(process.cwd(), config.dbPath)))
app.use(admin.routes())
app.use(admin.allowedMethods())
app.use(server('./client'))
app.use(api)
app.use(mock());

app.listen(config.port, '0.0.0.0', () => {
	console.log(`mock server listening http://${config.domain}:${config.port}`)
})