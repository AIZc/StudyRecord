const {Router} = require('express')

let router = new Router()

let {resolve} = require('path')

router.get('/register', (request, response) => {
    let url = resolve(__dirname, '../public/register.html')
    response.sendFile(url)
})

router.get('/login', (request, response) => {
    let url = resolve(__dirname, '../public/login.html')
    response.sendFile(url)
})

module.exports = ()=>{
    return router
}