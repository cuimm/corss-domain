module.exports = {
    PROT: 3001,
    CORS: {
        // 允许的源【Access-Control-Allow-Origin】
        ALLOW_ORIGIN: 'http://127.0.0.1:1001',
        // 允许请求方式【Access-Control-Allow-Methods】
        ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
        // 允许的请求头【Access-Control-Allow-Headers】
        HEADERS: 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With,X-Custom-Header-Cuimm',
        // 是否允许资源凭证（是否允许客户端携带cookieId）如果需要http请求中带上cookie，需要前后端都设置credentials，且后端设置指定的origin【Access-Control-Allow-Credentials】
        CREDENTIALS: true,
    }
}
