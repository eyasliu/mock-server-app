import {mock, Random} from 'mockjs'
import faker from 'faker'

faker.locale = "zh_CN"

const parseMock = (body, params) => {
	Random.extend({
		param: name => {
			return params && params[name] ? params[name] : ''
		}
	})
	let mockParse;
	try {
		let bodyObj = JSON.parse(body);
		let isArray = Array.isArray(bodyObj);
		mockParse = isArray ? JSON.stringify(mock({"array|1-20": bodyObj}).array) : JSON.stringify(mock(JSON.parse(body)))
	} catch(e) {
		mockParse = 'ERROR: ' + e.message
	}
	return faker.fake(mockParse);
}

export default () => async (context, next) => {
	if(context.body){
		console.log(context.routerParams)
		context.body = parseMock(context.body, context.routerParams)
	}
	await next()
}