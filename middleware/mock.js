import {mock} from 'mockjs'
import faker from 'faker'

const parseMock = body => {
	let mockParse;
	try {
		mockParse = JSON.stringify(mock(JSON.parse(body)))
	} catch(e) {
		mockParse = 'ERROR: ' + e.message
	}
	return faker.fake(mockParse);
}

export default () => async (context, next) => {
	if(context.body){
		context.body = parseMock(context.body)
	}
	await next()
}