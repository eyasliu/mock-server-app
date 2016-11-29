export default domain => async (context, next) => {
    context.set('Access-Control-Allow-Credentials', 'true');
    context.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    context.set('Access-Control-Allow-Headers', 'Accept,Content-Type');
    context.set('Access-Control-Allow-Origin', `${context.protocol}://${context.host}`);
    context.set('Access-Control-Expose-Headers', 'Accept,Content-Type');
    await next()
}