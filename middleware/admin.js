import Router from 'koa-router'
import DB from './db';

const admin = Router({
	prefix: '/admin'
})

admin.get('/projects', async context => {
	context.body = [];
})

admin.get('/projects/:name', async context => {
	const {db, apis} = new DB('basic')
	console.log('admin detail', apis.value())
	context.body = apis.value()
})


export default admin