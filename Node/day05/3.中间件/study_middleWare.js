
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()

// app.use((request,response,next)=>{
//     // request.demo = '5297'
//     // next()
//     // 图片防盗链
//     /*if (request.get('referer')){
//         let minReferer = request.get('referer').split('/')[2]
//         if (minReferer === 'localhost:63342'){
//             next()
//         }else{
//             response.sendFile(__dirname+'/public/err.png')
//         }
//     }else{
//         next()
//     }*/
// })

function guardPic(request,response,next) {
    if (request.get('referer')){
        let minReferer = request.get('referer').split('/')[2]
        if (minReferer === 'localhost:63343'){
            next()
        }else{
            response.sendFile(__dirname+'/public/err.png')
        }
    }else{
        next()
    }
}

// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))


app.get('/',(request,response)=>{
    response.send('ok')
})

app.get('/demo',(request,response)=>{
    // console.log(request.demo);
    console.log(request.query);
    response.send('ok2')
})

app.get('/picture',guardPic,(request,response)=>{
    response.sendFile(__dirname+'/public/bydseed.jpg')
})

app.post('/test',(request,response)=>{
    console.log(request.body)
    response.send('post,ok!')
})




app.listen(8000,(err)=>{
    if (err) console.log(err);
    else console.log('服务器启动成功!');
})