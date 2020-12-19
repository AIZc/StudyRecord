(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
* 主文件，用于汇总各个模块
* 注意：引入模块时：
*         1.如果引入的是第三方模块，则直接写模块名。
*         2.如果引入的是自定义模块，必须写路径。
* */

let module1 = require('./module1.js')
let {data, test} = require('./module1.js')//引入的同时，进行解构赋值
let module2 = require('./module2.js')
let module3 = require('./module3.js')
let uniq = require('uniq')([1, 3, 2, 5, 4, 3, 6, 7, 11, 10, 9, 8])


//如何使用一个模块取决于：模块暴露的是什么。
console.log(module1.data);
module1.test()
module2.haha()
console.log(module3.peiqi);
console.log(uniq);
console.log(data)
test()
//console.log(require('./modules/module1').data)
//验证内置关系
/*
console.log(module.exports === exports)
console.log(module.exports)
console.log(exports)*/

},{"./module1.js":2,"./module2.js":3,"./module3.js":4,"uniq":5}],2:[function(require,module,exports){
/*
* 第一种暴露方式：module.exports = value
* */
module.exports = {
  data:'atguigu,前端课程,哈哈',

  test () {
    console.log(this.data)
  }
}
},{}],3:[function(require,module,exports){
/*
* 第二种暴露方式：exports.xxxxxxx = value
* */
exports.haha = function () {
  console.log('我是module2里的一个函数')
}


},{}],4:[function(require,module,exports){

exports.peiqi = [1,3,5,7,9]

/*问题:
  1.暴露的本质到底是什么?module.exports所指向的那个对象
  2.在CommonJs模块规范中，module.exports 和 exports.xxx 不能混用。
  3.如果混用，以module.exports为主*/
/*module.exports = function haha() {
  console.log('哈哈')
}*/



},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
