/*
* 搭建Node原生服务器
* */

//引入node内置的http模块
let http = require('http');
// 引入一个内部模块,用于解析url
let qs = require('querystring')

// 1. 创建一个服务对象
let server = http.createServer(function (request,response) {
    let params = request.url.split('?')[1]
    let objParams = qs.parse(params)
    console.log(objParams)
    let {name,age} = objParams;
    response.setHeader('content-type','text/html; charset=utf-8')
    response.end(`<h1>你好,我的名字是${name}!年龄${age}</h1>`);
})
// 2. 让服务对象干活,获取客户端的请求,联系数据库取数据

server.listen(8000,function (err) {
    if (err) console.log(err);
    else console.log('server start success!');
})

