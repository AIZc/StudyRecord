let express  = require('express')

let cookies = require('cookie-parser')

let app = express()

app.use(cookies())

app.get('/demo',(req,res)=>{
    res.send('我是demo,没有操作cookie')
})

app.get('/demo1',(req,res)=>{
    let obj = {name:'政策',password:'xuerui'}
    res.cookie('zuoai',JSON.stringify(obj))
    res.send('11')
})

app.get('/demo2',(req,res)=>{
    let obj = {name:'政策',password:'xuerui'}
    res.cookie('zuoai',JSON.stringify(obj),{maxAge:1000*60*60*24})
    res.send('22')
})

app.get('/demo3',(req,res)=>{
    const {zuoai} = req.cookies
    let a = JSON.parse(zuoai)
    console.log(a.name)
    res.send('33')
})

app.get('/demo4',(req,res)=>{
    res.clearCookie('zuoai')
    res.send('删除了一个key为zuotai的cookie')
})

app.listen(8000,(err)=>{
    if (!err) console.log('服务器启动成功!');
    else console.log(err);
})