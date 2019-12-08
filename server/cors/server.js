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
    res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN);
    res.header('Access-Control-Allow-Credentials', CREDENTIALS);
    res.header('Access-Control-Allow-Headers', HEADERS);
    res.header('Access-Control-Allow-Methods', ALLOW_METHODS);
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
    res.send(data);
});


