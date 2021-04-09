

var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const OrderModel = require('../models/OrderModel')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
const sms_util = require('../util/sms_util')
const users = {}
const ajax = require('../api/ajax')
const svgCaptcha = require('svg-captcha')
const createToken = require('../token/createToken')
const checkToken = require('../token/checkToken')

const test = require('./test')
var scaptcha = ''
test(router)

/*
密码登陆
 */


router.post('/login_pwd', function (req, res) {
    const name = req.body.name
    const pwd = md5(req.body.pwd)
    const captcha = req.body.captcha.toLocaleLowerCase()
    console.log(scaptcha)
    console.log('/login_pwd', name, pwd, captcha)
    //可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
    if (captcha !== scaptcha) {
        return res.send({code: 1, msg: '验证码不正确'})
    }
    // 删除保存的验证码
    scaptcha = ''
    UserModel.findOne({name})
        .then((user) => {
            if (user) {
                if (user.pwd !== pwd) {
                    res.send({code: 1, msg: '用户名或密码不正确!'})
                } else {
                    res.send({
                        code: 0,
                        data: {
                            _id: user._id,
                            name: user.name,
                            token: createToken(user._id)
                        }
                    })
                }
                return new Promise(() => {

                }) // 返回一个pending状态的promise对象
            } else {
                return UserModel.create({name, pwd})
            }
        })
        .catch(error => {
            console.error('/login_pwd', error)
        })
})

/*
  添加订单
 */

router.post('/add_order', function (req, res) {
    const name = req.body.name
    const linkman = req.body.linkman
    const linkphone = req.body.linkphone
    const site = req.body.site
    const remark = req.body.remark
    const totalprices = req.body.totalprices
    const ordercontent = req.body.orderConent
    const shopname = req.body.shopName

    console.log('/add_order', name, linkman, linkphone, site, remark, totalprices, ordercontent,shopname)

    if(OrderModel.create({name,linkman,linkphone,site,remark,totalprices,ordercontent,shopname}))
    {
        res.send({"code": 0, msg: '订单提交成功'})
    }else{
        res.send({"code": 1, msg: '订单提交失败'})
    }

})

/*
 读取订单
*/
router.post('/read_order',function (req,res) {
    const name = req.body.name
    console.log(name)
    OrderModel.find({name})
        .then(data=>{
            res.send({"code": 0, data})
            }
        )
})


/*
一次性图形验证码
 */
router.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1l',
        noise: 2,
        color: true
    });
    req.session.captcha = captcha.text.toLowerCase();
    scaptcha = req.session.captcha
    console.log('/captcha', req.session.captcha)
    res.type('svg');
    res.send(captcha.data)
});

/*
发送验证码短信
*/
router.get('/sendcode', function (req, res, next) {
    //1. 获取请求参数数据
    var phone = req.query.phone;
    //2. 处理数据
    //生成验证码(6位随机数)
    var code = sms_util.randomCode(6);
    //发送给指定的手机号
    console.log(`向${phone}发送验证码短信: ${code}`);
    sms_util.sendCode(phone, code, function (success) {//success表示是否成功
        if (success) {
            users[phone] = code
            console.log('保存验证码: ', phone, code)
            res.send({"code": 0})
        } else {
            //3. 返回响应数据
            res.send({"code": 1, msg: '短信验证码发送失败'})
        }
    })
})

/*
短信登陆
*/
router.post('/login_sms', function (req, res, next) {
    var phone = req.body.phone;
    var code = req.body.code;
    if (users[phone] != code) {
        res.send({code: 1, msg: '手机号或验证码不正确'});
        return;
    }
    //删除保存的code
    delete users[phone];


    UserModel.findOne({phone})
        .then(user => {
            if (user) {
                user._doc.token = createToken(user._id)
                res.send({code: 0, data: user})
            } else {
                //存储数据
                return new UserModel({phone}).save()
            }
        })
        .then(user => {
            user._doc.token = createToken(user._id)
            res.send({code: 0, data: user})
        })
        .catch(error => {
            console.error('/login_sms', error)
        })

})

/*
根据请求携带的token查询对应的user
 */
router.get('/auto_login', function (req, res) {
    // 得到请求头中的token
    const token = req.headers['authorization']

    // 如果请求头中没有token, 直接返回
    if (!token) {
        return res.send({code: 1, msg: '请先登陆'})
    }

    // 解码token, 如果失败或过了有效期, 返回401
    const decoded = jwt.decode(token, 'secret')
    if (!decoded || decoded.exp < Date.now() / 1000) {
        res.status(401)
        return res.json({message: 'token过期，请重新登录'})
    }

    // 根据解码出的用户id, 查询得到对应的user, 返回给客户端
    const userId = decoded.id
    UserModel.findOne({_id: userId}, _filter)
        .then(user => {
            res.send({code: 0, data: user})
        })
})

/*
根据经纬度获取位置详情
 */
router.get('/position/:geohash', function (req, res) {
    const {geohash} = req.params
    ajax(`http://cangdu.org:8001/v2/pois/${geohash}`)
        .then(data => {
            res.send({code: 0, data})
        })
})

/*
获取首页分类列表
 */
router.get('/index_category', checkToken, function (req, res) {

// router.get('/index_category', function(req, res) {
    setTimeout(function () {
        const data = require('../data/index_category.json')
        res.send({code: 0, data})
    }, 300)
})

/*
根据经纬度获取商铺列表
 */
router.get('/shops', checkToken, function (req, res) {
// router.get('/shops', function(req, res) {
    setTimeout(function () {
        const data = require('../data/shops.json')
        res.send({code: 0, data})
    }, 300)
})


// router.get('/search_shops', checkToken, function(req, res) {
//   const {geohash, keyword} = req.query
//   ajax('http://cangdu.org:8001/v4/restaurants', {
//     'extras[]': 'restaurant_activity',
//     geohash,
//     keyword,
//     type: 'search'
//   }).then(data => {
//     res.send({code: 0, data})
//   })
// })

module.exports = router;