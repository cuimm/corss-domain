let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('../../'));

// -> 连接成功处理
io.on('connect', function (socket) {
  console.log('websocket has connceted');

  socket.emit('client-message', '欢迎你！');

  // -> 监听服务端消息
  socket.on('client-message', function (message) {
    console.log('客户端发送过来的消息：', message);
    if (message === '我很开心') {
      io.sockets.emit('server-message', '买买买～');
      return
    }
    socket.emit('server-message', '嗯嗯，收到～');
  });

  // -> 监听服务端关闭
  socket.on('disconnect', function (messasge) {
    console.log('server has closed');
  })
});


