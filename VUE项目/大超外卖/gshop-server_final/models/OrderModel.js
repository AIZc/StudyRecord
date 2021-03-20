/*
能操作Order集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const orderSchema = new mongoose.Schema({
    // 用户名
    'name': {type: String},
    // 联系人
    'linkman': {type: String},
    //电话
    'linkphone': {type: String},
    //地址
    'site': {type: String},
    // 备注
    'remark': {type: String},
    // 总价
    'totalprices': {type: String},
    //食品内容
    'ordercontent': {type: String}
})

// 3. 定义Model(与集合对应, 可以操作集合)
const OrderModel = mongoose.model('orders', orderSchema)

// 4. 向外暴露Model
module.exports = OrderModel