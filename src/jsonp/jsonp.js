$.ajax({
    url: 'http://127.0.0.1:3000/user/info',
    method: 'get',
    dataType: 'jsonp',
    success: (res) => {
        console.log(res)
    }
})