const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.set('views', './haha')

app.get('/show', function (request, response) {
    let personArr = [
        {name: 'peiqi', age: 4},
        {name: 'suxi', age: 5},
        {name: 'peideluo', age: 6}
    ]
    response.render('human',{data:'atguigu',name:'<h1>haha<\h1>',persons:personArr})
})

app.listen(8000, (err) => {
    if (!err) console.log('服务器启动成功!');
    else console.log(err);
})