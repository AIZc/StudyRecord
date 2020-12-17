/*
* 主文件，用于汇总各个模块
* 注意：引入模块时：
*         1.如果引入的是第三方模块，则直接写模块名。
*         2.如果引入的是自定义模块，必须写路径。
* */
let module1 = require('./modules/module1.js')
let {data,test} = require('./modules/module1.js')//引入的同时，进行解构赋值
let module2 = require('./modules/module2.js')
let module3 = require('./modules/module3.js')
let uniq = require('uniq')


//如何使用一个模块取决于：模块暴露的是什么。
console.log(module1.data);
module1.test()
module2.haha()
console.log(module3.peiqi);
console.log(uniq([1, 3, 2, 5, 4, 3, 6, 7, 11, 10, 9, 8]));
console.log(data)
test()
//console.log(require('./modules/module1').data)
//验证内置关系
/*
console.log(module.exports === exports)
console.log(module.exports)
console.log(exports)*/
//console.log(require)