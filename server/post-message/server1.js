const express = require('express'),
  app = express();

app.listen(1001, _ => {
  console.log('静态资源服务1 ok');
})

// 静态资源文件处理，路径定位到根目录
app.use(express.static('../../'))

