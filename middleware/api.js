import DB from './db';
import _ from 'lodash'

export default async (context, next) => {
	const {url, method} = context;
	const {apis} = new DB(_.first(context.subdomains) || 'basic')
	let content = apis.get(method.toLowerCase() + ' ' + context.url).value()
	if(!content){
		content = apis.get(context.url).value()
	}
	if(content){
		context.body = JSON.stringify(content) || '';
	}
	context.set('Content-Type', 'application/json;charset=utf-8')
	await next();
}