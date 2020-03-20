let express = require('express'),
    app = express();

app.listen(3001, _ => {
    console.log('server ok!')
});

app.get('/user/info', (req, res) => {
    let { callback = Function.prototype } = req.query;
    let data = {
        code: 0,
        user: {
            name: 'cuimm'
        }
    }
    res.send(`${callback}(${JSON.stringify(data)})`)
    // JSONP 不安全
    // res.send(`${callback}(document.body.removeChild(document.getElementById('app')))`)
})

