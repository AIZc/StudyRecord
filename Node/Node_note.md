# Node

## Node 服务器端

```angular2html
nodejs服务器端 适用于I/O密集型,只有一个线程,将客户发来的请求转给数据库.

java服务器端 适用于CPU密集型,给每一个客户机,都开一个线程,一个线程只为一个客户服务,用户体验佳,但在交互少的情况下,浪费资源,小型公司不适合使用java服务端.
```
##看每天对应的代码和笔记

## 必记1
```javascript
/*
* 搭建Node原生服务器
* */

//引入node内置的http模块
let http = require('http');

// 1. 创建一个服务对象
let server = http.createServer(function (request,response) {
    response.setHeader('content-type','text/html; charset=utf-8')
    response.end('ok,love 瑞');
})
// 2. 让服务对象干活,获取客户端的请求,联系数据库取数据

server.listen(8000,function (err) {
    if (err) console.log(err);
    else console.log('server start success!');
})

```
## 