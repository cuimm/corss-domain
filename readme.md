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


 


