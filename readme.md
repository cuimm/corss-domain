### JSONP
### CORS
### webpack-dev-server 
### nginx反向代理
### postMessage
### socket.io
### document.domin + iframe
只能实现 同一个主域，不同子域之间的操作

例如：用这一方法，可以从 v.qq.com 向 sports.qq.com 发送请求，但是不可以向 weixin.com 发送请求。

父页面A：http://www.abc.com/A.html

```
<iframe src="http://m.abc.com/B.html"></iframe>
<script>
    document.domain = 'abc.com';
    var user = 'admin';
</script>

```

不同子域页面B：http://m.abc.com/B.html
```
<script>
    document.domain = 'abc.com';
    alert(window.parent.user);
</script>
```
### window.name + iframe

### location.hash + iframe


 
### 复杂请求：
当满足以下条件时，浏览器主动触发OPTIONS请求（复杂请求）：
1、使用了下面任一 HTTP 方法（非HEAD、GET、POST请求）：
  – PUT
  – DELETE
  – CONNECT
  – OPTIONS
  – TRACE
  – PATCH
2、人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为：
  – Accept
  – Accept-Language
  – Content-Language
  – Content-Type (but note the additional requirements below)
  – DPR
  – Downlink
  – Save-Data
  – Viewport-Width
  – Width

3、 Content-Type 的值不属于下列之一:
  – application/x-www-form-urlencoded
  – multipart/form-data
  – text/plain

### 否则：简单请求


