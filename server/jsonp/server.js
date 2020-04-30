let express = require('express'),
    app = express();

app.listen(3001, _ => {
    console.log('server ok!')
});

app.get('/user/info', (req, res) => {
  // 设置cookie
  res.header('Set-Cookie', 'SUHB=0HTQlICkedfExt; expires=Friday, 30-Apr-2021 17:24:29 GMT; path=/;domain=aaa.bbb.com;')
  res.header('Set-Cookie', 'cui=cuimm; expires=Friday, 30-Apr-2021 17:24:29 GMT; path=/;')

  let { callback = Function.prototype } = req.query;
    let data = {
        code: 0,
        user: {
            name: 'cuimm~'
        }
    }
    res.send(`${callback}(${JSON.stringify(data)})`)
    // JSONP 不安全
    // res.send(`${callback}(document.body.removeChild(document.getElementById('app')))`)
})
