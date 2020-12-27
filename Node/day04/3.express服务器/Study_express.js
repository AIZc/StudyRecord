//引入express框架

const express = require('express')

const app = express()
app.get('/',function (request, response) {
    console.log(request.query)
    response.send('get')
})

app.get('/ms',function (request, response) {
    response.send('我是美食主页!')
})

app.get('/ms/c17',function (request, response) {
    response.send('我是美食-火锅主页!')
})

app.post('/',function (request, response) {
    response.send('post')
})

app.listen(8000,function (err) {
    if (err) console.log(err);
    else console.log('服务器启动成功!');
})