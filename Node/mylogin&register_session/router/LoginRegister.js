const {Router} = require('express')

let router = new Router()

let usersModel = require('../model/usersModel')

let md5 = require('md5')

let sha1 = require('sha1')

let errMsg = {}

router.post('/register', (request, response) => {
    // console.log(request.body)
    const {email, username, password, re_password} = request.body

    const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9_]{2,10}\.com$/
    const usernameReg = /[\u4e00-\u9fa5]/gm
    const passwordReg = /^[a-zA-Z0-9_!@#$%^&*]{4,20}$/

    if (!emailReg.test(email)) {
        // response.send('邮箱不合法')
        errMsg.emailErr = '邮箱格式不合法!'
    }
    if (!usernameReg.test(username)) {
        // response.send('用户名不合法,用户名必须由汉字组成')
        errMsg.usernameErr = '用户名不合法,用户名必须由汉字组成'
    }
    if (!passwordReg.test(password)) {
        // response.send('密码不合法,密码必须有[a-zA-Z0-9_!@#$%^&*],4-20位组成')
        errMsg.passwordErr = '密码不合法,密码必须有[a-zA-Z0-9_!@#$%^&*],4-20位组成'
    }
    if (password !== re_password) {
        // response.send('两次密码输入不一致')
        errMsg.rePasswordErr = '两次密码输入不一致'
    }
    if (JSON.stringify(errMsg) !== '{}') {
        response.render('register',{errMsg})
        return
    }
    usersModel.findOne({email}, (err, data) => {
        if (data) {
            console.log(`邮箱为${email}的用户注册失败，因为邮箱重复`)
            errMsg.emailErr = `邮箱'${email}'已经被注册了`
            response.render('register',{errMsg})
            return
        }
        usersModel.create({email, username, password:sha1(password)}, (err) => {
            if (!err) {
                console.log(`邮箱为${email}的用户注册成功`);
                response.redirect(`login/?email=${email}`)
            } else {
                console.log(err)
                errMsg.networkErr = '网络不稳定,请稍后重试'
                response.render('register',{errMsg})
            }
        })
    })
})

router.post('/login', (request, response) => {
    const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9_]{2,10}\.com$/
    const passwordReg = /^[a-zA-Z0-9_!@#$%^&*]{4,20}$/

    const {email, password} = request.body
    if (!emailReg.test(email)) {
        // response.send('邮箱不合法')
        errMsg.emailErr = '邮箱格式不合法!'
    }
    if (!passwordReg.test(password)) {
        // response.send('密码不合法,密码必须有[a-zA-Z0-9_!@#$%^&*],4-20位组成')
        errMsg.passwordErr = '密码不合法,密码必须有[a-zA-Z0-9_!@#$%^&*],4-20位组成'
    }
    if (JSON.stringify(errMsg) !== '{}') {
        response.render('login',{errMsg})
        return
    }
    usersModel.findOne({email, password:sha1(password)}, (err, data) => {
        if (err) {
            console.log(err)
            errMsg.networkErr = '网络不稳定!请稍后重试'
            response.render('login',{errMsg})
            return
        }
        if (data) {
            // response.cookie('_id',data._id,{maxAge:1000*30})
            request.session._id = data._id.toString()
            response.redirect(`http://localhost:8000/user_center`)
            return
        }
        errMsg.loginErr = '用户名或者密码错误'
        response.render('login',{errMsg})
    })
})



module.exports = () => {
    return router
}
