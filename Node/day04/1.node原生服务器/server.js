/*
* 搭建Node原生服务器
* */

//引入node内置的http模块
let http = require('http');

// 1. 创建一个服务对象
let server = http.createServer(function (request,response) {
    response.setHeader('content-type','text/html; charset=utf-8')
    response.end('<h1>你好,我是你学习node的第一个服务器!</h1>');
})
// 2. 让服务对象干活,获取客户端的请求,联系数据库取数据

server.listen(8000,function (err) {
    if (err) console.log(err);
    else console.log('server start success!');
})

