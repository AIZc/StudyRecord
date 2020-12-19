"use strict";

var _module = require("./module1");

var module1 = _interopRequireWildcard(_module);

var _module2 = require("./module2");

var module2 = _interopRequireWildcard(_module2);

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _module5 = require("./module4");

var _module6 = _interopRequireDefault(_module5);

var _uniq = require("uniq");

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//1.


//如果模块是默认暴露的，尽量就不要用如下的写法
//import * as module3 from './module3'

//引入module4，module4里用了多种暴露的方式
// import module4,{arr0,bar,foo,str,student,d1} from './module4'


//引入module2,module2是【统一暴露】的（module2里面给暴露的内容起了别名）


//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象
console.log(_module.name);
//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。


//【引入module3,module3是默认暴露的】


//引入module2,module2是【统一暴露】的
// import {name,getName} from './module2'     //会和第八行的命名冲突


//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象
/*
* 主文件，用于汇总各个模块
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的。

//引入module1，module1是【分别暴露】的

(0, _module.getName)();
console.log(module1.name);
module1.getName();

//2.
console.log(_module2.nameZ);
(0, _module2.getNameZ)();
console.log(module2.nameZ);
module2.getNameZ();

//3.
console.log(_module4.default);

//4.

console.log(_module6.default);

console.log(_module5.arr0);
(0, _module5.bar)();
(0, _module5.foo)();

console.log(_module5.str);
console.log(_module5.student);
console.log(_module5.d1);

console.log((0, _uniq2.default)([1, 2, 3, 4, 666]));