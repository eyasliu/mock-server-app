import {mock} from 'mockjs'
import faker from 'faker'

const parseMock = body => {
	let fakerParse = faker.fake(body)
	try{
		fakerParse = JSON.parse(fakerParse);
	} catch(e) {}
	return mock(fakerParse)
}

export default () => async (context, next) => {
	context.body = parseMock(context.body)
	await next()
}