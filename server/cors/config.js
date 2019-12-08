module.exports = {
    PROT: 3001,
    CORS: {
        // 允许的源
        ALLOW_ORIGIN: 'http://127.0.0.1:5600',
        // 允许请求方式
        ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
        // 允许的请求头
        HEADERS: 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With',
        // 是否允许资源凭证（是否允许客户端携带cookid）如果需要http请求中带上cookie，需要前后端都设置credentials，且后端设置指定的origin
        CREDENTIALS: true,
    }
}