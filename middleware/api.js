import DB from './db';
import _ from 'lodash'

export default async (context, next) => {
	const url = context.url;
	const {apis} = new DB(_.first(context.subdomains) || 'basic')
	const content = apis.get(context.url).value()
	context.body = JSON.stringify(content) || '';
	await next();
}