import koa from 'koa'
import logger from 'koa-logger'
import mock from './middleware/mock'
import api from './middleware/api'

const app = new koa()

app.use(logger())
// app.use(async (context, next) => {
// 	context.body = '{{name.lastName}} - @title'
// 	await next()
// })
app.use(api)
app.use(mock());

app.listen(3000, '0.0.0.0', () => {
	console.log('mock server listening http://localhost:3000')
})