import koa from 'koa'
import logger from 'koa-logger'
import mock from './middleware/mock'
import api from './middleware/api'
import admin from './middleware/admin'
import cors from './middleware/cors'
import server from 'koa-static'

const app = new koa()


app.use(logger())
app.use(cors('http://portal.wps.cn'))
app.use(admin.routes())
app.use(admin.allowedMethods())
app.use(server('./client'))
app.use(api)
app.use(mock());

app.listen(3000, '0.0.0.0', () => {
	console.log('mock server listening http://localhost:3000')
})