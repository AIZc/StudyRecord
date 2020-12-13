#  day 06

## 1. 预解析

- 预解析演示

  - 变量

    ```
    带var 和 不带var:
    预解析只会解析带var的变量,不过不带var不进行预解析.
    ```

  - 函数

    ```js
    字面量 和 表达式函数:
    function f1(){}  如果是这种写法,函数整体会提升.
    var f1 = function(){}  如果是这种写法,只会提升var f1,不会提升函数表达式.
    ```

  -  优先级

    如果同时定义了变量和函数都为一个变量名,函数的的优先级比变量高.

    ```javascript
    var a;
    function a(){
        alert('函数')
    };
    alert(a);    //输出的是函数体
    ```

    ```javascript
    alert(a);    //  function a(){ alert('我是函数2')}
    var a = '我是变量'
    function a(){ alert('我是函数') }
    alert(a);   //我是变量  var a = '我是变量' 相当于 var a  a = '我是变量'   a指向了'我是变量'  
    function a(){ alert('我是函数2')}
    ```
    
    ```js
    /*
     测试题1: 先预处理函数, 后预处理变量, 如果已经存在就会被忽略
     */
    function a() {}
    var a;
    console.log(typeof a)
    
    
    /*
    测试题2: 变量预处理, in操作符
     */
    if (!(b in window)) {
      var b = 1;
    }
    console.log(b)    // 先var b; 因此if语句就是if(!1)   因此没有进行b=1 赋值操作 
    
    /*
    测试题3: 预处理, 顺序执行
     */
    var c = 1
    function c(c) {
      console.log(c)
      var c = 3
    }
    c(2)
    ```

## 2. IIFE(匿名函数自调用)

```javascript
(function(){
	alert(11)
	return '11'
})()


(function(){})(); //这样的写法就是我们的匿名函数自调用
```

- 匿名函数自调用的特点:
  - 封装代码实现,不把代码暴露出去
  - 可以防止外部命名空间被污染
  - 通常用来做一些项目的初始化

## 3. arguments实参伪数组

```javascript
var a = 10;
var b = 5;
function add(a,b){
    console.log(arguments);
    // return a + b;
    return arguments[0] + arguments[1];
}
add(a,b)
```

- arguments是一个实参数组,是将传入的参数构建成了数组.

## 4. 回调函数

```javascript
function f1(fn){
    console.log('i love mrs.wang!');
    var a = 10;
    var b = 5;
    console.log(fn(a,b));
}

function add(a,b){
    return a + b;
}
f1(add);
```

# day 07

## 1. 对象的定义

- 对象没有作用域，函数有

- 定义1-字面量定义

  ```javascript
  var obj = {};//定义了一个对象，没有自己添加属性和方法；
  
  var obj = {
      name:'iphoneX',
      color:'black',
      call:function(){
          console.log('打电话');
      }
  }
  ```

- 定义2-构造函数定义

  ```javascript
  var obj = new Object();
  console.log(obj)
  var obj2 = new Object({
  name:'杨幂',
  age:'33'
  })
  console.log(obj2)
  ```

- 定义3-工厂函数定义 //本质上还是构造函数

  ```javascript
  function createObject(name,age){
      var obj = new Object();
      obj.name = name;
      obj.age = age;
      return obj;
  }
  
  console.log(createObject('热巴',25))
  ```

## 2. 对象遍历

```javascript
//遍历数组用for遍历对象用for in
for(var key in obj){
   console.log(key,obj[key]);
   //遍历对象的时候，取值只能使用[]的方式，因为key是一个变量，
   //如果写乘obj.key拿到的是undefined，key被认为是对象里面的属性
   //obj[key]  key被解析位变量，使用变量的值进行替换；
}
```

## 3. this

- this  

  通常情况下任何函数中都会有this这个关键字,this 本质是一个对象,代表调用这个函数或者方法的对象.

  - 在函数当中,函数也可以叫做 window对象 的方法,this永远代表window

    ```javascript
    function add(a,b){
        console.log(this);   //代表window对象
        function add2() {
            console.log(this);  //代表window对象
        }
        return a + b;
    }
    
    console.log(window.add(10,20));
    ```

  - 在事件中,回调函数当中的this,代表的是事件对象

    * 暂不理解,待补充

  - 在对象的方法当中,this代表的是这个对象.

    ```javascript
    obj = {
        add:function(){
            console.log(this);
        }
    }
    ```

  - 在构造函数中,代表是实例化出来的对象

    ```js
    function Person(name,age,gender){     //构造函数
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.eat  = function(){
    console.log('吃饭');
    }
    }
    var charlie =new Person('张超',15,'男')
    alert(charlie.name)
    ```


## 4. Map和Set

- `Map`是一组键值对的结构，具有极快的查找速度。相当于python的字典一样。

  ```js
  var m = new Map([['Michael',95],['bob',75]])
  m.get('Michael')   //95
  ```

- 初始化一个Map需要一个二维数组，或者直接初始化一个空的Map。

  ```js
  var m = new Map()   //空Map
  m.set('Adam',67)   //添加新的key -  value
  m.set('Bob',59)
  m.has('Adam')  // 是否存在key'Adam'
  m.get('Adam') //67
m.delete('Adam') 
  m.get('Adam') //undefined
  ```
  
- Set

  `Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。

  要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`：

  ```js
  var s1 = new Set()  //空Set
  var s2 = new Set([1,2,3,4])  //含有1，2，3
  ```

  - 重复元素在Set中自动被过滤

    ```js
    > var s  = new Set([1,2,3,3,'3',4]);
    undefined
    > s
    Set(5) { 1, 2, 3, '3', 4 }
    ```

  - 通过`add(key)`方法可以添加元素到`Set`中，可以重复添加，但不会有效果：

    ```js
    > s.add(5)
    Set(6) { 1, 2, 3, '3', 4, 5 }
    > s.add(5)
    Set(6) { 1, 2, 3, '3', 4, 5 }
    ```

  - 通过`delete(key)`方法可以删除元素：

    ```js
    > s.delete('3')
    true
    > s
    Set(5) { 1, 2, 3, 4, 5 }
    ```

## 5. iterable

遍历`Array`可以采用下标循环，遍历`Map`和`Set`就无法使用下标。为了统一集合类型，ES6标准引入了新的`iterable`类型，`Array`、`Map`和`Set`都属于`iterable`类型。

具有`iterable`类型的集合可以通过新的`for ... of`循环来遍历。

```js
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}



//使用forEach
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

运行结果
A, index = 0
B, index = 1
C, index = 2
```

## 6.原型链

如果我们通过`new Student()`创建了很多对象，这些对象的`hello`函数实际上只需要共享同一个函数就可以了，这样可以节省很多内存。

要让创建的对象共享一个`hello`函数，根据对象的属性查找原则，我们只要把`hello`函数移动到`xiaoming`、`xiaohong`这些对象共同的原型上就可以了，也就是`Student.prototype`：

![img](https://static.liaoxuefeng.com/files/attachments/1024700039819712/l)

```js
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};
```

- 原型链

  1. 实例在调用方法或者属性的时候,首先从自己的实例对象中去找,

  2. 自己的实例对象中找不到就在原型对象(Student prototype)中去找,

  3. 原型对象找不到就到原型对象的原型对象中去找,

  4. 原型对象的原型对象中找不到就到原型对象的原型对象的原型对象中去找(Object prototype)

  5. 原型链： 沿着`__proto__`查找的这条链就是原型链

- `最全图解`

  ![img](https://upload-images.jianshu.io/upload_images/2973478-012619f6d933d392.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

## 7. 原型对象

```js
var person = function (name,age) {
   this.name = name;
   this.age = age;
   this.fushe = 'green'
}
person.prototype.fushe = 'yellow'   
//person.prototype 显式原型
var p1 = new person('hah','jj')
 console.log(p1.__proto__)  //实例的隐式原型  ==  实例的构造函数的显示原型
console.log(p1.fushe)   //原型对象中的共有属性
//1. 每个函数function都有一个prototype，即显式原型
//2. 每个实例对象都有一个__proto__，可称为隐式原型
//3. 对象的隐式原型的值为其对应构造函数的显式原型的值
//  * 函数的prototype属性: 在定义函数时自动添加的, 默认值是一个空Object对象
//  * 对象的__proto__属性: 创建对象时自动添加的, 默认值为构造函数的prototype属性值
//  * 程序员能直接操作显式原型, 但不能直接操作隐式原型(ES6之前)
```

# day 08

## 1. JSON

- JSON是js当中的一个内置对象，里面封装了对json格式数据的操作方法；
- json是一种数据格式，是前后端目前数据交互的主要格式（xml）
- JSON对象的方法: parse:把json字符串转换为js对象， stringify把js对象转换为json字符串

```js
var dataTest = {
    name:'赵丽颖',
    age:32
}

var dataTestArr = [{name:'赵丽颖',age:32},{name:'杨幂',age:33},{name:'热巴',age:28}]


//把对象json化  字符串化

var dataStr = JSON.stringify(dataTest);
console.log(dataStr);

var dataStr = JSON.stringify(dataTestArr);
console.log(dataStr);


var data = JSON.parse(dataStr);
console.log(data);
```

# day 12

## 1. 节点

`文档树所有包含的东西都可以称作节点；最关注的是元素节点`

- 子节点和子元素

  - childNodes 

    ```
    拿到的是某个元素的子节点：包括元素子节点和文本子节点，如果有注释还有注释节点；
    
    高级浏览器: 元素,文本(文本,空格,换行),注释
    低版本浏览器: 元素,文本(不包括空格和换行),注释
    ```

  - children

    ```js
    高级浏览器:元素
    低版本浏览器:元素,注释
    ```

    ```js
    console.log(document.documentElement.childNodes)   //html中的
    console.log(document.body.childNodes)  //body中的
    console.log(document.documentElement.children)   //html中的
    console.log(document.body.children)  //body中的
    ```

- 父元素和父节点

  - parentNode 

    `父节点,其实就是父元素标签,所有浏览器都能用`

  - parentElement

    `父元素,父标签 所有浏览器都能用`

- 兼容性封装其他节点的方式

  ```js
  	获取其它节点：
  		第一个子节点       firstChild
  		第一个子元素节点    只有高级浏览器可以使用  firstElementChild
  		最后一个节点        lastChild
  		最后一个元素节点  只有高级浏览器可以使用  lastElementChild
  		上一个兄弟节点      previousSibling
  		上一个兄弟元素节点  只有高级浏览器可以使用 previousElementSibling
  		下一个兄弟节点    nextSibling
  		下一个兄弟元素节点  只有高级浏览器可以使用  nextElementSibling
  ```



# day 14

## 1. dom2事件的绑定和解绑

**语法：element.addEventListener(event, function, useCapture)**

- 第一个参数是事件的类型（如“ click”或“ mousedown”）。
- 第二个参数是我们想要在事件发生时调用的函数。
- 第三个参数是一个布尔值，指定是使用事件冒泡还是事件捕获。此参数是可选的。默认是false,即冒泡阶段触发

## 2. 事件流

`4`(3的子元素) --> `3`(2的子元素) --> `2`(1的子元素) --> `1` --> `1`--> `2`(1的子元素) --> `3`(2的子元素) --> `4`(3的子元素)

- 前四个是捕获阶段,后四个为冒泡阶段

- #### 情况1:假如都在捕获阶段触发（即第三个参数都为true）

  点击4后，在捕获阶段触发，我们就将触发的事件依次压栈，栈中是4、3、2、1，捕获结束后依次出栈，所以输出结果为1 2 3 4.

- #### 情况2:假如都在冒泡阶段触发（即第三个参数都为false）

  同理，点击4后，此时在冒泡阶段触发，依次压栈的是 1,2,3,4，冒泡结束后，依次出栈，故结果为4 3 2 1

- #### 情况3:假如2、4在冒泡触发，1、3在捕获阶段触发

  此时，点击4后，此时捕获阶段压入事件为3、1，捕获结束后，立即出栈：1 3；然后进入冒泡阶段，压入元素依次为2、4，出栈输出为4  2. 故最终结果为1 3 4 2.

## 3. 事件委派

`出现新添加的东西，并且新添加的东西要和老的拥有同样的行为，就用事件委派`

`给父元素添加事件,不给元素本身添加,事件发生后通过父元素去找真正发生的元素进行处理.`

```js
ulLoveList.onmouseover = function (e){
    e = e || window.e
    var liNode = e.target
    liNode.style.backgroundColor = 'hotpink'
}
ulLoveList.onmouseout = function (e){
    e = e || window.e
    var liNode = e.target || event.srcElement   // target 谷歌和火狐
    liNode.style.backgroundColor = 'white'      //  srcElement  ie
}
//具体详情看自己的练习day13

```

## 4. 移入移出事件的区别

`onmouseenter` `onmouseleave`       如果是一个父子元素模型，对父元素添加移入和移出，当鼠标移入父元素里面的子元素的时候，
事件并没有移出然后再移入。也就是说事件元素没有切换；

`onmouseover` `onmouseout` 这两对之间的区别
如果是一个父子元素模型，对父元素添加移入和移出，当鼠标移入父元素里面的子元素的时候，
事件会移出然后再移入。也就是说事件元素会有切换；`事件委派的时候，必须使用这一对；`

## 5. target

目前理解,target是事件标签下所有的标签

```html
<body>
    <!--例如-->
<ul>
    <li>11</li>
    <li>22</li>
    <li>33</li>
    <li>44</li>
    <li>55</li>
    <li>66</li>
    <li>77</li>
    <li>88</li>
    <li>99<a href="javascript:;">aa</a></li>
    <li>1010</li>
</ul>
<script>
    var body = document.querySelector('body')
    body.addEventListener('click',function (event) {
        var a = event.target
        console.log(a.innerHTML)
    })
</script>
</body>
<!--target可以指向body下的所有标签
以上点击事件就是点那个哪个就是target-->
```



# JS基础自我审查

## 1.二维数组的创建

```js
// 方法一：

var a = new Array();

for(var i=0;i<3;i++){        //一维长度为3

    a[i] = new Array();

    for(var j=0;j<5;j++){    //二维长度为5

        a[i][j] = i+j;

    }

}


//方法二：

var a = [[1,2,3],[2,3,4]]；
```

## 2. apply and call

```js
function BlueCat(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Object.prototype.run = function(){
    console.log('跑的很快~');
}


var cat1 = new BlueCat('tom',2,'male');
var cat2 = new BlueCat('jerry',3,'male');

function add(a,b){
    return a + b;
}

//window.add(10,20);

//apply/call 方法可以改变一个函数的执行对象（执行者）
//把add的执行者window改为了cat1，让cat1可以有求和的方法；
//apply的用法两个参数，第一个参数代表的改变的执行者（对象）
//第二个参数，是函数所需要的参数，这个参数必须是数组形式；

var result = add.apply(cat1,[10,20]);   //仅局限于当前表达式中
//console.log(cat1.add(12,20))  无效
console.log(result);
// var result = add.call(cat1,10,20);  
// console.log(result);
```

## 3.数据结构和内存

  重点： js数据类型分为： 基本数据类型和复合数据类型(引用数据类型，对象)
  1. 基本数据类型：

    - 定义： string， number， boolean，null， undefined
    - 特征： 基本数据类型数据赋值给某一个变量之后值本身就不会再发生改变
  2. 引用数据类型:

    - 定义： object， array， function
    - 特征：引用数据类型的值可以通过其赋值的变量修改
  3. 判断数据类型： typeof

    问题： typeof返回值有几种？？？
    答案： String，Number，Boolean，Undefined，Function，Object
    特殊： null和array的返回值也为Object
  4. 面试题： 如何用原生js判断Array/Function/Object

    答案： 使用instanceOf

```js
<!--
js内存结构:
1. js只有堆内存结构，要区分java等其他语言(有堆内存，有栈内存<栈内存的特点，内存空间小，运行快，使用时分配，且空间固定>)
2.一块内存包含2个数据
    	* 内部存储的数据(一般数据/地址数据)
     	* 内存地址值数据
3. 内存分类
    	* 栈结构: 全局变量, 局部变量 (空间较小)
        * 堆结构(列表结构): 对象 (空间较大)
-->

```

## 4. instanceof

```js
  function Foo() {  }
  var f1 = new Foo();
  console.log(f1 instanceof Foo);  // 1
  console.log(f1 instanceof Object); 1

  //案例2 
  console.log(Object instanceof Function)// 1
  console.log(Object instanceof Object) //1
  console.log(Function instanceof Object) //1
  console.log(Function instanceof Function)// 1
  function Foo() {}
  console.log(Object instanceof  Foo); //0
```

## 5. 作用域面试题

- 函数内声明变量不用var  会自动上升到全局

```js
/*
   问题: 结果输出多少?
   */
var x = 10;
function fn() {
    console.log(x);
}
function show(f) {
    var x = 20;
    f();
}
show(fn);   //10
```

# ES5 

## 1. Object扩展

1. ```js
   1. Object.create(prototype, [descriptors])
     * 作用: 以指定对象为原型创建新的对象
     * 为新的对象指定新的属性, 并对属性进行描述
       - value : 指定值
       - writable : 标识当前属性值是否是可修改的, 默认为false
       - configurable: 标识当前属性是否可以被删除 默认为false
       - enumerable： 标识当前属性是否能用for in 枚举 默认为false
   2. Object.defineProperties(object, descriptors)
     * 作用: 为指定对象定义扩展多个属性
       * get ：用来获取当前属性值得回调函数
       * set ：修改当前属性值得触发的回调函数，并且实参即为修改后的值
      * 存取器属性：setter,getter一个用来存值，一个用来取值
   ```

   ```js
   Object.create(prototype, [descriptors])
   var obj = {
   name: 'kobe',
   showName: function () {
   console.log(this.name);
   }
   }
   
   var obj2 = Object.create(obj, {
   sex: {
   value: '男', // 修饰符
   writable: true, // 可以被修改的   标识当前属性值是否是可修改的, 默认为false
   configurable: true,  //标识当前属性是否可以被删除 默认为false
   enumerable: true   //enumerable： 标识当前属性是否能用for in 枚举 默认为false
   },
   age: {
   value: 43,
   enumerable: true
   }
   });
   console.log(obj2.sex);
   obj2.sex = '女';
   console.log(obj2);
   console.log(obj2.sex);
   //
   //
   // for(var i in obj2){ // for in枚举对象的时候除了能够枚举自身的属性之外还会枚举原型的属性
   //   if(obj2.hasOwnProperty(i)){// 验证是否是自身的属性
   //     console.log(i);
   //   }
   // }
   
   // delete obj2.sex;
   // console.log(obj2);
   ```

- 很重要，具体用法自行查看`MDN`

##  2.Array扩展

```js
1. Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
2. Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
3. Array.prototype.forEach(function(item, index){}) : 遍历数组
4. Array.prototype.map(function(item, index){}) : 遍历数组返回一个新的数组，返回加工之后的值
5. Array.prototype.filter(function(item, index){}) : 遍历过滤出一个新的子数组， 返回条件为true的值
- 如果不懂，
  /*
   需求:
   1. 输出第一个6的下标
   2. 输出最后一个6的下标
   3. 输出所有元素的值和下标
   4. 根据arr产生一个新数组,要求每个元素都比原来大10
   5. 根据arr产生一个新数组, 返回的每个元素要大于4
   */
```

## 3.Function扩展

```js
1. Function.prototype.bind(obj) :
    * 作用: 将函数内的this绑定为obj, 并将函数返回
2. 面试题: 区别bind()与call()和apply()?
    * 都能指定函数中的this
    * call()/apply()是立即调用函数
    * bind()是将函数返回

var obj = {
    name: 'kobe'
}

function fun(msg) {
    console.log(this, msg);
}

// fun.call(obj, 123);
// fun.apply(obj, [123]);
// bind修改this指向
fun.bind(obj,123)();



setTimeout(function () {
    console.log(this);// window
}.bind(obj), 3000)
```

# ES6

 ## 1. let

1. 作用:
  * 与var类似, 用于声明一个变量
2. 特点:
  * 在块作用域内有效
  * 不能重复声明
  * 会预处理，有变量提升， 但是不能提前使用提升的变量
3. 应用:
  * 循环遍历加监听
  * 使用let取代var是趋势

## 2. const

1. 作用:
  * 定义一个常量	
2. 特点:
  * 不能修改
  * 其它特点同let
3. 应用:

  * 保存不用改变的数据

## 3. 解构赋值

1. 理解:
  * 从对象或数组中提取数据, 并赋值给变量(多个)
2. 对象的解构赋值
   
    ```js
    let {n, a} = {n:'tom', a:12}
    ```
    
3. 数组的解构赋值
   
    ```js
    let [a,b] = [1, 'atguigu'];
    ```
    
4. 用途

  * 给多个形参赋值

## 4. 模板字符串

1. 模板字符串 : 简化字符串的拼接
  * 模板字符串必须用 `` 包含

  * 变化的部分使用${xxx}定义

  ```js
  let obj = {username: 'kobe', age: 43};
  let str = '我的名字是： ' + obj.username + '， 我的年龄是： ' + obj.age;
  console.log(str);
  console.log('---------------模板字符串拼接--------------------');
  let str1 = `我的名字是 ${obj.username}, 我的年龄是: ${obj.age}`
  console.log(str1);
  ```

  ## 5. 简化对象的写法

  ```html
  <!--
  简化的对象写法
  * 省略同名的属性值
  * 省略方法的function
  * 例如:
  let x = 1;
  let y = 2;
  let point = {
  x,
  y,
  setX (x) {this.x = x}
  };
  -->
  <script type="text/javascript">
  
      let username = 'kobe';
      let age = 43;
      console.log('---------------- 对象的常规书写方式---------------------');
  
      // let obj = {
      //   username: username,
      //   age: age,
      //   showName: function () {
      //     console.log(this.username);
      //   }
      // }
      // console.log(obj);
      // obj.showName();
  
      console.log('---------------- 对象的简写方式---------------------');
      let obj = {
          username,  // 同名的属性可省略 ---> key 和value一样的时候
          age,
          showName() { // 省略函数的function，冒号
              console.log(this.username);
          }
      }
  
      console.log(obj);
      obj.showName();
  </script>
  ```

  ## 6. 箭头函数

1. 语法  let fun = 形参 => 函数体;
2.  重点:函数体
   - 只有一条语句或者表达式的时候:{}可以省略
   - 当{}省略的时候会自动return当前语句或者表达式的执行结果
3. 特点:
   - this: 箭头函数没有自己的this,不是调用的时候决定的,而是定义的时候决定的
   - 理解:
     - 定义的时候外部是否有函数,如果有当前箭头函数的this同外部函数的this指向同一个对象
     - 如果外部没有函数this指向的是window
   - 箭头函数不能作为构造函数.

## 7. 三点运算符

1. 语法: ...变量名
2. 作用:
   - rest可变参数
     - 用来取代arguments对象
     - 使用三点运算符收集的是一个真数组,不是argument伪数组
   - 扩展运算符(拆包)
     - 可以获取数组中的每一项
   - 三点运算符再函数形参位置的时候,只能放在最后 

## 8. Symbol

1. 理解: ES6提供的一种新的数据类型
2. 基本数据类型:string number Boolean null undefined symbol
3. typeof返回值string number boolean undefined Symbol object funtion
4. symbol 特点:值是唯一的

## 9. class

```js
//1. 通过 class 定义类/实现类的继承
//2. 在类中通过 constructor 定义构造方法
class Person{
    // 类的构造方法，生成实例
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(this.name,this.age)
        return '调用了showInfo'
    }
}
Person.msg = 'person的msg'    //类自身的静态属性,实例不能调用,实例调用必须加上指向constructor指向类
let p1 = new Person('charlie',19)     
console.log(p1.showInfo(),Person.msg,p1.msg)    //实例调用属性的顺序是沿着原型链调用的

//3. 通过new来创建类的实例
let p1 = new Person('charlie',19) 

//4. 通过 extends 来实现类的继承
//5. 通过super调用父类的构造方法
//6. 重写从父类中继承的一般方法

class Person{
    // 类的构造方法，生成实例
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    showInfo(){  //一般的方法
        console.log(this.name,this.age)
        return '调用了Person的showInfo'
    }
}
// Person.msg = 'person的msg'
// let p1 = new Person('charlie',19)
// console.log(p1.showInfo(),Person.msg,p1)

class Girl extends Person{
    constructor(name,age,gender) {
        super(name,age);   //调用了父类的构造方法
        this.gender = gender
    }
    showInfo() {    //重写从父类继承的一般方法
        console.log(this.name,this.age,this.gender)
        return '调用了Girl的show'
    }
}

let xrbaby = new Girl('雪瑞baby','21','女')

console.log(xrbaby.showInfo())
```

