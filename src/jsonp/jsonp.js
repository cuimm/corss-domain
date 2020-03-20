// 1、JQuery 调用JSONP
$.ajax({
    url: 'http://127.0.0.1:3001/user/info',
    method: 'get',
    dataType: 'jsonp',
    success: (res) => {
        console.log('1、JQuery 调用JSONP', res)
    }
})

// 2、手动实现JSONP
function JSONP({url, params,}) {
  // 动态生成前后端需要执行的callback函数名
  const callback = `JSONP_${new Date().valueOf()}`

  return new Promise((resolve, reject) => {
    // 请求参数
    params = {...params, callback}
    let arrs = []
    Object.keys(params).forEach(key => {
      arrs.push(`${key}=${params[key]}`)
    })

    // 在页面上添加script标签
    const script = document.createElement('script')
    script.src = `${url}?${arrs.join('&')}`
    document.body.appendChild(script)

    // 添加全局方法
    window[callback] = (data) => {
      resolve(data)
      // 数据请求完毕之后，删除该script标签
      document.body.removeChild(script)
    }
  })
}

JSONP({
  url: 'http://127.0.0.1:3001/user/info',
  params: {
    id: 123,
  },
}).then(res => {
  console.log('2、手动实现JSONP', res);
})
