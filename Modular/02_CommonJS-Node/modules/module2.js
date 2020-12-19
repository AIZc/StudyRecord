/*
* 第二种暴露方式：exports.xxxxxxx = value
* */

let module1 = require('./module1.js')
exports.ruiName = function () {
    console.log(`ruiName is ${module1.name}`);
}