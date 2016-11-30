import RouteParser from 'route-parser'
import _ from 'lodash'

export default async (context, next) => {
	const {method, db} = context;
	const {apis} = db

	let { url } = context
	
	// 尝试 method+url 查找
	let content = apis.get(method.toLowerCase() + ' ' + context.url).value()
	if(!content){
		// 尝试 只根据url查找
		content = apis.get(context.url).value()
	}
	if(!content){
		// 尝试根据路由参数匹配查找
		const allApis = apis.value()
		_.find(allApis, (val, key) => {
			let theUrl = key.split(' ').length > 1 ? key.split(' ')[1] : key.split(' ')[0];
			const parser = new RouteParser(theUrl);
			if(parser.match(url) && !content){
				content = allApis[key]
				return true
			}
		})
	}
	if(content){
		context.body = JSON.stringify(content) || '';
	}
	context.set('Content-Type', 'application/json;charset=utf-8')
	await next();
}