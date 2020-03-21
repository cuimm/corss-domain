const CONFIG = require('./config');

const express = require('express'),
  app = express();

app.listen(CONFIG.PROT, _ => {
  console.log(`server is ok, and listening to then prot ${CONFIG.PROT}`);
});

// 解决跨域中间件
app.use((req, res, next) => {
  const {
    ALLOW_ORIGIN,
    CREDENTIALS,
    HEADERS,
    ALLOW_METHODS
  } = CONFIG.CORS;
  // 允许的源
  res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN);

  // 是否允许资源凭证（是否允许客户端携带cookieId）如果需要http请求中带上cookie，需要前后端都设置credentials，且后端设置指定的origin
  res.header('Access-Control-Allow-Credentials', CREDENTIALS);

  // 允许的请求头
  res.header('Access-Control-Allow-Headers', HEADERS);

  // 允许请求方式
  res.header('Access-Control-Allow-Methods', ALLOW_METHODS);

  // 预检请求有效时间，单位为秒
  res.header('Access-Control-Max-Age', 3);

  // 允许返回的头（设置响应报头那些可以被客户端获取到）
  res.header('Access-Control-Expose-Headers', 'Accept,Authorization,Content-Type,Origin,X-Requested-With,X-Weiboad-Traceid, myName');


  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('X-Custom-Header-Cuimm', 'test-customize-header')

  req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CORSS DOMAIN') : next();
});

app.get('/user/list', (req, res) => {
  const data = {
    code: 0,
    list: [{
      name: 'cuimm'
    }, {
      name: 'cui'
    }]
  }
  // 设置响应体Header，客户端如果想要获取该Header中的myName值，需配置头信息：在 Access-Control-Expose-Headers 中添加 myName
  res.setHeader('myName', 'cuimm');

  res.send(data);
});

app.post('/user/modify', (req, res) => {
  const data = {
    code: 0,
    result: true
  }
  res.send(data);
});
