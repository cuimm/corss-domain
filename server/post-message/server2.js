const express = require('express'),
  app = express();

app.listen(1002, _ => {
  console.log('静态资源服务器2 ok');
})

app.use(express.static('../../'))
