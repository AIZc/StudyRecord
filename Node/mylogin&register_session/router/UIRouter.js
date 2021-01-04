const {Router} = require('express')

let router = new Router()

let userModel = require('../model/usersModel')

let cookies = require('cookie-parser')

router.use(cookies())

let {resolve} = require('path')

router.get('/register', (request, response) => {
    response.render('register', {errMsg: {}})
})

router.get('/login', (request, response) => {
    let {email} = request.query
    response.render('login', {errMsg: {email}})
})

router.get('/user_center', (request, response) => {

    let {_id} = request.session
    if (_id) {
        userModel.findOne({_id}, (err, data) => {
            if (!err && data) {
                response.render('userCenter', {username: data.username})
            } else {
                response.redirect('http://localhost:8000/login')
            }
        })
    } else {
        response.redirect('http://localhost:8000/login')
    }
})

module.exports = () => {
    return router
}