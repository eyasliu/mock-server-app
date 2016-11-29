import Router from 'koa-router'

const admin = Router({
	prefix: '/admin'
})

admin.get('/project', async context => {
	const {db} = context;
	context.body = db.apis.value();
})

admin.post('/project', async (context, next) => {
	const {request} = context
	const {db, apis} = context.db
	const {url, data} = request.body
	apis.set(url, data).value()
	context.body = {result: true}
})
admin.delete('/project', async (context) => {
	const {request} = context
	const {db, apis} = context.db
	const {url} = request.body
	apis.set(url, undefined).value()
	context.body = {result: true}
})

export default admin