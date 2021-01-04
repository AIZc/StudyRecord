const express = require('express')

const app = express()

app.disable('x-powered-by')

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views','./views')

const db = require('./db/db')

app.use(express.urlencoded({extended: true}))

const UIRouter = require('./router/UIRouter')

const LGRouter = require('./router/LoginRegister')

db(() => {
    app.use(UIRouter())

    app.use(LGRouter())

    app.listen(8000, (err) => {
        if (!err) console.log('服务器启动成功!');
        else console.log(err);
    })
}, (err) => {
    console.log('数据库链接失败', err);
})