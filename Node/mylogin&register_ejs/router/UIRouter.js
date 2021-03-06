const {Router} = require('express')

let router = new Router()

let {resolve} = require('path')

router.get('/register', (request, response) => {
    response.render('register',{errMsg:{}})
})

router.get('/login', (request, response) => {
    let {email}  = request.query
    response.render('login',{errMsg:{email}})
})

router.get('/user_center',(request,response)=>{
    let {username} = request.query
    response.render('userCenter',{username})
})

module.exports = ()=>{
    return router
}