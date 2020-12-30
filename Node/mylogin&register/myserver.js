const express = require('express')

const app = express()

app.disable('x-powered-by')

app.use(express.static(__dirname + '/public'))

const usersModel = require('./model/usersModel')

const db = require('./db/db')

app.use(express.urlencoded({extended: true}))

db(() => {
    app.get('/register', (request, response) => {
        response.sendFile(__dirname + '/public/register.html')
    })

    app.get('/login', (request, response) => {
        response.sendFile(__dirname + '/public/login.html')
    })

    app.post('/register', (request, response) => {
        // console.log(request.body)
        const {email, username, password, re_password} = request.body

        const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9_]{2,10}\.com$/
        const usernameReg = /[\u4e00-\u9fa5]/gm
        const passwordReg = /^[a-zA-Z0-9_!@#$%^&*]{4,20}$/

        if (!emailReg.test(email)) {
            response.send('邮箱不合法')
        } else if (!usernameReg.test(username)) {
            response.send('用户名不合法,用户名必须由汉字组成')
        } else if (!passwordReg.test(password)) {
            response.send('密码不合法,密码必须有[a-zA-Z0-9_!@#$%^&*],4-20位组成')
        } else if (password !== re_password) {
            response.send('两次密码输入不一致')
        } else {
            usersModel.findOne({email}, (err, data) => {
                if (data) {
                    console.log(`邮箱为${email}的用户注册失败，因为邮箱重复`)
                    response.send('该邮箱已被注册，请更换邮箱')
                } else {
                    usersModel.create({email, username, password}, (err) => {
                        if (!err) {
                            console.log(`邮箱为${email}的用户注册成功`)
                            response.send('注册成功')
                        } else {
                            response.send('写入数据库失败,注册失败~ ')
                        }
                    })
                }
            })
        }
    })

    app.post('/login', (request, response) => {
        const {email, password} = request.body
        usersModel.findOne({email,password}, (err, data) => {
            if (err) {
                console.log(err)
                res.send('网络不稳定!,请重试')
                return
            }
            if (data) {
                response.redirect('http://www.baidu.com')
            } else {
                response.send('用户名或密码错误!')
            }
        })
    })


    app.listen(8000, (err) => {
        if (!err) console.log('服务器启动成功!');
        else console.log(err);
    })
}, (err) => {
    console.log('数据库链接失败', err);
})