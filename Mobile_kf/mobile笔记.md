# day01

## processon.com

一个在线的画图工具

## iphone 6 的参数必须要记住

设备像素  750 * 1334
设备独立像素 375 * 66 7
ppi  326

## 普通屏幕下无法表示 0.5 像素

## 控制台启动

ctrl + shift + i 启动控制台
ctrl + shift + m 切换移动控制台
ctrl + shift + d 切换控制台的位置

## meta

设置字符集
设置关键字
设置描述
设置作者

## 980 布局视口

980 像素就是浏览器厂商设置的布局视口的初始宽度

## 1password

密码管理工具
lastpass 

## 中国的防火墙

长城  GFW   

# day02

## 阻止默认行为
e.preventDefault();

## 输入法
QQ 输入法 剪切板

## 中文状态下使用英文标点
搜狗和 QQ 都可以

## mac clips

## 数据共享的方法
1. 提高变量的作用域.

2. 将数据保存在一个对象中.

## addEventListener 第三个参数
```js
document.documentElement.addEventListener('touchstart', function(e){
    //阻止默认行为
    e.preventDefault();
},{
    passive:false // 被动  被动模式   true  false  控制 e.preventDefault 是否失效
}); 
```

## 默认行为阻止
推荐创建一个最外层的包裹元素, 然后进行事件绑定, 并阻止默认行为

## SEO
search engine optimization  

## 是不是网页看到的内容源代码中一定有呢??
不一定, 很有可能数据是通过 JS 动态创建的, 源代码中不一定存在

## IP  品牌

## 字符码表
汉字
gb2312  gbk

繁体
big5

unicode 

## 获取手指离开元素时的位置
只能使用 changedTouches 属性

## 背单词
desk
boy
computer
cup
mouse
hair
clothes
shoe
mobile
floor
ceil

desk
boy
desk
computer
boy
cup
computer
mouse
cup

# day03

## 阻止默认行为

e.preventDefault();dd

## 输入法

QQ 输入法 剪切板

## 中文状态下使用英文标点

搜狗和 QQ 都可以

## mac clips

## 数据共享的方法

1. 提高变量的作用域.

## addEventListener 第三个参数

```js
document.documentElement.addEventListener('touchstart', function(e){
    //阻止默认行为
    e.preventDefault();
},{
    passive:false // 被动  被动模式   true  false  控制 e.preventDefault 是否失效
}); 
```

## 默认行为阻止

推荐创建一个最外层的包裹元素, 然后进行事件绑定, 并阻止默认行为

## SEO

search engine optimization

## 是不是网页看到的内容源代码中一定有呢??

不一定, 很有可能数据是通过 JS 动态创建的, 源代码中不一定存在

## IP 品牌

## 字符码表

汉字 gb2312 gbk

繁体 big5

unicode

## 获取手指离开元素时的位置

只能使用 changedTouches 属性

## 背单词

desk boy computer cup mouse hair clothes shoe mobile floor ceil

desk boy desk computer boy cup computer mouse cup

# day04

## 蓝湖
蓝湖是一个生态, 团队开发, 设计稿在线预览与标注

### 使用步骤
1. 注册账号
2. 下载插件 双击下一步
3. 打开 PS 并打开 PSD 文件
4. PS -> 窗口 -> 扩展功能 -> 蓝湖

## 联系方式
17611466036 

## viewport 适配
1. 设置 viewport width 等于设计稿的宽度即可
2. 量取元素的尺寸, 量出来是多少, 就写多少. 比如元素宽度 100 像素, 则css 样式为 width : 100px

## rem 适配与 less 的结合
1. 创建 less 文件并引入. 声明一个变量
```js
@font-size: 设计稿的宽度 / 10rem;
```
* 上边的 rem 的作用是为了进行字符串的拼接, 并无其他特殊意义

2. 设置元素的 CSS 样式
```css
#box{
    width:200px;
    height: 100px;
}
```
进行转换
```css
#box{
    width: 200/@font-size;
    height: 100/@font-size;
}
```

3. 增加 JS 的适配
```js
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

window.onresize = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
}
```

## 适配的两种思路
1. 定值
375  100   =>  414  ?(110.4)

2. 定比例 + less

## 在线绘图工具
https://www.draw.io/
https://www.processon.com

## 正则简单复习
### 声明
* new RegExp
* / /

### 普通字符
任意字符  数字 字母  符号  中文

### 转义字符
* \w 一个字母数字下划线
* \d 一个数字  
* \s 一个空白字符
* \t 一个水平制表符
* \W  \D  \S 

### 元字符
+
*
{}
?
[]
$
^
()

### 模式修正符
i 
g

### 方法
* test
* exec
* replace 

# day05

## vw  vh
这是两个长度单位, 1vw = 1% 的设备独立像素总宽, 1vh = 1% 的设备独立像素总高

iphone 6   375   667
div{
    width: 10vw;
    height: 20vh;
}

div 的宽度等于 37.5px, 高度等于 133.4

## 最后加单位
设置行内样式的时候, 在最后的位置加单位最方便

## classList 
classList 是元素对象的一个属性, 用来操作元素的 class 类

* add 增加类名
* remove 移除类名
* contains 是否包含指定的类名

## 图片加载对元素高度的影响
图片的加载需要时间, 如果在图片加载完毕之前,获取元素的高度, 可能获取不到真实的想要的结果. 保险的做法是在事件(onload)中获取 

## 结果情况固定的场景
想到 取余，switch...case

## 感知痛点

## getComputedStyle
是一个函数, 用来获取元素计算后的样式
get         获取
computed    计算后的
style       样式

## 强制类型转换为 false 的情况
0  NaN  ''  null  undefined  false  0.0

boolean  string  number  undefined  null object

usonb 

undefined  ''  null  0   0.0  NaN  false

## 关于省略花括号
如果 if else 语句后只有一条语句, 则花括号可以省略

## webstorm 左侧的工作目录路径不要太深

## classList
* add
* remove
* contains
* toggle 类名的切换有无

## 水平撑开元素
父级元素定位
position:absolute;
white-space:nowrap
font-size: 0;

子元素
display:inline-block;

## left 与 translateX 的差异

![timeline-frames-macbook1](D:/前端/05/day_06/课件/assets/timeline-frames-macbook1.png)

​    左上方的图片是通过改变元素top/left进行动画的帧率，而右上方则是调用translate函数的帧率。我们可以明显看出左图的每一帧都执行了相对较长时间的paint，在每一帧内，cpu都需要计算该元素的其他样式，特别是相对需要复杂计算的盒阴影，渐变，圆角等样式，最后都需要将这些样式应用到该元素内。从这个角度看，如果对于较为老旧的移动设备进行相对复杂的动画，那么效果肯定不理想。

​    而通过调用 translate，会启动硬件加速，即在 GPU 层对该元素进行渲染。这样，CPU 就会相对解放出来进行其他的计算，GPU 对样式的计算相对较快，且保证较大的帧率。我们可以通过 2d 和 3d 的 transform 来启用 GPU 计算。

## 贝塞尔曲线
贝塞尔曲线 https://cubic-bezier.com/

1. 水平方向代表的是时间 t
2. 垂直方向代表的是进度 s (位移) 
3. 切线与 X 轴形成的夹角代表速度, 夹角越大速度越快, 反之速度越小
4. 想越界, 则将曲线拉至最上线区域外.

## 一提到自动
想到 定时器, 过渡, 动画

## gt  lt
greater than

less than

## 属性操作
* getAttribute 获取属性
* setAttribute 设置属性
* removeAttribute 移除属性

## 获取元素在同辈元素中的索引
1 在标签中增加索引标记
```
<div index="2"></div>
<div data-index="3"></div>
```
2 遍历元素增加属性
```js
navItems.forEach(function(item, key){
    //将下标存入到元素对象中
    item.key = key;
    item.addEventListener('touchstart', function(){
        //获取下标
        console.log(this.key);
    });
});
```

## url
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=0#abc

http 协议
tingapi.ting.baidu.com  域名
/v1/restserver/ting 路径
method=baidu.ting.billboard.billList  查询字符串
#abc 锚点



##  setInterval 
函数的返回结果是 数字

## 服务使用
1. 启动命令行  点击左下角的 Terminal (终端)
2. 切换文件夹目录至 server 文件夹 (cd )
3. 启动服务  
```js
node app.js
```

## 竖向滑屏

### tween 算法

tween 是一套函数集合。 主要的功能在于实现动画效果

https://www.cnblogs.com/cloudgamer/archive/2009/01/06/Tween.html

```
参数说明：
t: current time：当前时间；
b: beginning value：初始值，元素的初始位置；
c: change in value：变化量，元素的结束位置与初始位置距离差
d: duration：持续时间,整个过渡持续时间
s：Elastic和Back 的可选参数。回弹系数,s值越大.回弹效果越远。

返回值：
元素每一次运动到的位置
```
```js
/*tween类*/
var Tween = {
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
}
```



### 滚动条比例

##### scale 滚动条高度的系数
```
滚动条高度/视口高度 = 视口高度/内容高度 = scale
scale = 视口高度/内容高度
```

## IOS 多指事件

### 事件类型

- gesturestart : 手指触碰当前元素，屏幕上有两个或者两个以上的手指
- gesturechange :  手指触碰当前元素，屏幕上有两个或者两个以上的手指位置在发生移动
- gestureend :  在gesturestart后, 屏幕上只剩下两根以下（不包括两根）的手指

### 多指事件属性

- rotation :    表示手指变化引起的旋转角度，负值表示逆时针旋转，正值表示顺时针旋转。
- scale :   表示两个手指间距离的变化情况（例如向内收缩会缩短距离）；这个值从 1 开始，并随距离拉大而 增长，随距离缩短而减小。根据我们的生理极限，不允许出现负值

# day09

## 懒加载

懒加载是页面的一种加载效果

## 图片的接口:

https://picsum.photos/

https://picsum.photos/id/151/200/300

## 让图片不加载

1. 删除图片的src属性
2. 自定义一个属性来保存src对应的值





​	