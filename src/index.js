const axios = require('axios');
axios.get('/user/list')
    .then(res => {
        console.log(res)
    })