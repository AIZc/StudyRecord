# day 01

## 1. 软件分类

1. C/S架构的软件
   - c表示客户端，s表示服务器
   - 客户端：
     * 用户通过客户端来使用软件
     * 服务器用来处理软件的业务逻辑
   - 例子:
     * qq,office,王者荣耀
   - 特点：
     * C/S架构软件必须安装后才可以使用
     * C/S架构软件更新时，服务器和客户端都需要更新
     * C/S架构的软件无法跨平台使用
     * C/S架构的软件客户端和服务器间的通信采用自有的协议,安全性较好
2. B/S
   * B表示浏览器, S表示服务器
   * 例子:
     - 京东,淘宝,12306
   * 特点:
     - 不需要安装直接可以使用
     - 软件更新客户端无需更新
     - 软件可以跨平台
     - B/S架构的软件,客户端和服务器间的通信采用的公共的HTTP协议,安全性较差

## 2. 代码笔记

1. ```html
   <head>
   自结束标签 meta用来设置网页的基本的信息
   <meta charset="UTF-8"> 用来指定网页的编码字符集（避免乱码问题）
   </head>
   ```

2. ```html
   在HTML中多个空格和换行会被解析为一个空格
   
   可以使用实体（转义字符）来表示一些特殊的符号
       语法：&实体的名字;
           空格  &nbsp;
           大于号 &gt;
           小于号 &lt;
           版权符号 &copy;
           &#Unicode编码;	--> 表示编码对应的
   ```

3. ```html
   <!--   hr本来表示水平线，在h5中用于表示分割两个区块 -->
      <hr>
   ```

# day 02~03

## 1. meta标签

`meta`标签共有两个属性：

```undefined
 1. http-equiv属性
 2. name属性
```

* **http-equiv属性**
  
   设置http-equiv：设置http协议的响应头
   
   `http-equiv`顾名思义，相当于`http`的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为`content`，`content`中的内容其实就是各个参数的变量值。
`meta`标签的`http-equiv`属性语法格式是：
  `＜meta http-equiv=”参数” content=”参数变量值”＞`
  其中`http-equiv`属性主要有以下几种参数：
  
  ```html
  1.<meta http-equiv=”Set-Cookie” content=”cookievalue=xxx; expires=Friday,12-Jan-2001 18:18:18 GMT; path=/”>:如果网页过期，那么存盘的cookie将被删除。必须使用GMT的时间格式。
  2.<meta http-equiv='expires' content='时间' >：用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。
  3.<meta http-equiv=”Refresh” content=”5;URL”>：告诉浏览器在【数字】秒后跳转到【一个网址】
  4.<meta http-equiv=”content-Type” content=”text/html; charset=utf-8″>：设定页面使用的字符集。
    <meta charset=”utf-8″>：在HTML5中设定字符集的简写写法。
  5.<meta http-equiv=”Pragma” content=”no-cache”>：禁止浏览器从本地计算机的缓存中访问页面内容。访问者将无法脱机浏览。
6.<meta http-equiv=”Window-target” content=”_top”>：用来防止别人在iframe(框架)里调用自己的页面，这也算是一个非常实用的属性。
   7.<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'> :强制浏览器按照特定的版本标准进行渲染。但不支持IE7及以下版本。如果是ie浏览器就用最新的ie渲染，如果是双核浏览器就用chrome内核。
  ```
  
* **name属性**

  - 主要用于描述网页，与之对应的属性值为`content`，`content`中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。

  - `meat`标签的`name`属性语法格式是：
     `＜meta name=”参数” content=”具体的参数值”＞`

  - 其中`name`属性主要有以下几种参数：

  ```html
  1.<meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>：在移动设备浏览器上，禁用缩放（zooming）功能，用户只能滚动屏幕。
  2.<meta name=”description” content=””>：告诉搜索引擎，当前页面的主要内容是xxx。
  3.<meta name=”keywords” content=””>：告诉搜索引擎，当前页面的关键字。
  4.<meta name=”author” content=””>：告诉搜索引擎，标注网站作者是谁。
  5.<meta name=”copyright” content=””>：标注网站的版权信息。
  ```

  **meta中name标签的功能**
   １、帮助主页被各大搜索引擎登录

  * `meta`标签的一个很重要的功能就是设置关键字，来帮助你的主页被各大搜索引擎登录，提高网站的访问量。

  * 在这个功能中，最重要的就是对`Keywords`和`description`的设置。因为按照搜索引擎的工作原理,搜索引擎首先派出机器人自动检索页面中的`keywords`和`decription`，并将其加 入到自己的数据库，然后再根据关键词的密度将网站排序。

  * 因此，我们必须设置好关键字，来提高页面的搜索点击率。下面我们来举一个例子供大家参考：

  ```html
  <meta name=”keywords” content=”网页,网页制作,网页特效,建站指南,教程下载,动画制作,网页教学，网页素材，视频教程，技术论坛，免费空间，免费域名”>
  <meta name=”description” content=”网页教学网,专业的网页教学网站”＞
        <!--    设置好这些关键字后，搜索引擎将会自动把这些关键字添加到数据库中，并根据这些关键字的密度来进行合适的排序。-->
  ```

## 2. 代码笔记

1. 图片的格式

	```html
图片的格式：

    jpeg（jpg）
        - 支持的颜色比较丰富，不支持透明效果
        - 适合用来显示照片
        
    gif
        - 支持的颜色比较少，支持简单透明，支持动图
        - 颜色单一的图片（logo）
            简单透明的图片
            动图
    
    png
        - 支持的颜色丰富，支持复杂透明
        
        
    效果一致，用小的
    效果不一致，用效果好的    
    
    webp
        - google专门为网页设计一种图片格式
        - 支持的颜色丰富、支持复杂透明、支持动图、并且占用内存特别小   
        - 但是它的兼容性比较差（不能兼容所有浏览器）
        
    通过base64编码的图片（特殊情况下使用）
        base64可以用来将图片转换字符串，直接在页面中使用
	```

2. img标签

	```html
<!--   图片标签用来向页面中引入一个外部图片 
        使用img标签来引入外部图片
        属性：
            src 图片的路径
            alt 图片的描述
                这个描述不会在页面中显示
                但是有可能在图片无法加载时显示
                
                搜索引擎会根据alt属性来判断图片的内容
                    如果没有alt属性搜索引擎不会对图片进行收录
            width 图片的宽度
            height 图片的高度
                宽度和高度如果只修改一个，则另一个会等比例缩放。
   -->
   <img src="1.gif" alt="小松鼠">
   <img src="2.gif" alt="大嘴" height="100"  width="100">
	```

3. audio标签

	```html
   <audio controls src="src/audio.mp3"></audio>
   
   <audio controls>
       <source src="src/audio.mp3">
       <source src="src/audio.ogg">
<!--       <embed src="src/audio.mp3" type="audio/mp3" width="200" height="100">-->
       
   </audio>
	```

4. video标签

   ```html
   <video controls width="600">    # controls 一般不写，各个浏览器不一样
       <source src="src/video.mp4">
       <source src="src/video.webm">
   </video>
   ```

5. a超链接

   ```html
   <!--   
          a标签（超链接）
              - 通过超链接可以从一个页面跳转到另外的页面
              
              属性：
                   href 指定要跳转的目标的路径
                       可以指定一个外部页面的地址
                       可以通过相对路径指定一个内部地址
                       可以指定跳转到页面内部的其他的位置
                           # 表示当前页面的顶部
                           #id属性值，跳转页面中指定元素所在的位置
                           
                   target 表示打开链接的目标位置
                       可选值：
                           _self 默认值，在当前窗口打开页面
                           _blank 在新窗口打开
                   
                  
      -->
      
      <a href="https://www.baidu.com" target="_blank">去baidu</a>
      <br><br>
      <a href="05.图片标签.html">去05</a>
      <br><br>
      <a href="#bottom">去底部</a> <br><br>
      <a href="#p3">去p3</a>
   ```

# day 04

## 1. 列表

1. 无序列表

   ```html
   <ul> 
        <li></li>
        <li></li>
   </ul>
   ```

2. 有序列表

   ```html
   <ol>
       <li></li>
       <li></li>
       <li></li>
   </ol>
   ```

3. 定义列表

   ```html
   <dl>
       <dt></dt>
       <dd></dd>
   </dl>
   ```

## 2. 选择器

1. 元素选择器
   
   * 标签名{}
2. id选择器
   
   * #id{}
3. 类选择器
   
   * .class{}
4. 并集选择器
   
* 选择器1，选择器2，选择器3{}
  
5. 通配选择器

   * *{}

6. 交集选择器

   - 选择器1选择器2选择器3{}

7. 后代元素选择器

   * 祖先 后代{}

8. 子元素选择器

   * 父元素>子元素{}

9. 兄的下一个弟元素

   * 兄 + 弟

10. 兄后面所有弟弟元素

    - 兄 ~ 弟

11. 伪类选择器

    * 伪类都是以:开头的

    * 伪类表示元素一些特殊状态或位置

      ```html
       :first-child 第一个子元素
       :first-of-type 同类型的第一个子元素 
       :last-child 最后一个子元素 
       :last-of-type 同类型的最后一个子元素 
       :nth-child(n) 第N个子元素
       :nth-of-type(n) 同类型的第N个子元素
       :only-child 唯一的子元素
       :only-of-type 同类型中唯一的子元素
       :empty 空元素  :not() 除了
       :link 正常的链接（没访问过的链接） 
       :visited 访问过的链接
       :hover 鼠标移入的状态
       :active 鼠标点击的状态
      ```

# day 05

## 1. 选择器补充

- 属性选择器
  * 根据元素的属性来获取元素
  * 语法：
    * [title]
    * [title='hello']
    * [title^='h']       -->  匹配以'h'开头的
    * [title$='h']  -->  匹配以'h'结尾的
    * [title*='h']   --> 匹配包含'h'的属性
- 伪元素
  * 伪元素用来表示一些特殊位置的元素
  * 伪元素使用::开头
    - ::before 元素内部的开始位置
    - ::after 元素内部的结束位置
    - ::selection 选中的内容
    - ::first-letter 第一个字母(汉字)
    - ::first-line  第一行

## 2. CSS特点

- 选择器权重
  * 当使用不同的选择器选中同一个元素,并且为它的同一个样式设置不同的值,这时就发生了 样式冲突.
  * 发生冲突时,哪个样式会生效有选择器的优先级决定:
    - 内联样式   1000
    - id选择器 100
    - 类和伪类 10 
    - 元素选择器 1
    - 通配选择器 0
    - 继承的样式,没有优先级,所以可以自定义位 -1
  * 如果优先级一样,则使用靠后的样式
  * !important 可以再一个样式的最后添加它,这样该样式将会获得最高优先级,慎用.

# day 06

## 1. 盒模型相关的几个属性

- overflow
  - 设置元素如何处理溢出的内容
  - 可选值:
    * visubke 默认值,不处理溢出内容在盒子外部显示
    * hidden 溢出的内容会被裁剪不在页面中显示
    * sroll 生成水平和垂直双方向滚动条
    * auto 根据需要生成滚动条
- display
  * 设置元素的框的类型
  * 可选值:
    * block 元素作为块元素显示
    * inline 元素作为行内元素显示
    * inline-block 元素作为行内块元素显示
    * table 元素会作为一个表格显示
    * none 元素不在页面中显示
    * flex 元素会作为一个弹性容器显示
- visibility
  * 设置元素的显示状态
  * 可选值：
    * visible 默认值，元素正常显示
    * hidden 元素在页面中隐藏

## 2. 外边距折叠

- 垂直方向的相邻外边距会发生重叠的现象

  * 兄弟元素间，相邻的垂直外边距会取最大值。
    * 两正，取最大
    * 两负，取绝对值最大的负数
    * 一正一负，求和
  * 父子元素间，子元素的上外边距会传递给父元素

- 解决折叠问题

  ```css
  .box1::before{         #  在父元素的开头添加这段代码 可以取消折叠问题
      content: '';
      display: table;
  }
  ```

##  3. 文档流

- 文档就是网页
- 文档流是网页的一个基础位置,页面中的所有元素默认都在文档流中排列
  * 块元素在文档流中的特点:
    * 在页面中自上向下排列
    * 默认宽度是父元素的全部
    * 默认高度被内容撑开
  * 行内元素在文档流中的特点:
    * 在页面中自左向右排列,一行占满换到第二行继续自左向右
    * 默认宽度和高度都是被内容撑开
  * 行内元素的盒模型
    - 行内元素不支持设置宽度和高度
    - 行内元素支持水平方向的内边距,边框,外边距.

# day 07

## 1. 浮动

* 浮动的特点

  1. 元素浮动以后会完全脱离文档流，其下的元素会自动上移 

  2. 设置浮动后元素会向页面的左侧或右侧移动 

  3. 浮动元素不会盖住没有浮动的兄弟元素(但会盖住下一个没有浮动的弟弟元素)，也不会浮出父元素的边框 
  4. 浮动元素不会超过他上面的没有浮动的兄弟元素，最多一边齐 
  5. 浮动元素不会覆盖文字 

* 浮动脱离文档流

  1. 行内元素变成块元素
  2. 块元素宽度和高度被内容撑开,并且不会独占页面一行

* 清楚浮动带来的影响 clear

  * 可选值:

    none 不清除

    left 清楚左侧浮动带来的影响

    right 清楚右侧浮动带来的影响

    both 清楚最大的那侧浮动带来的影响

* 高度塌陷的问题:

  - 父元素的高度默认被子元素撑开,如果子元素浮动将会导致父元素的高度塌陷.

  - 解决方式

    * 开启父元素 BFC,   --> overflow:hidden

    * ```css
      /* 使用伪元素 */
      父元素::after{
      	content:'';
      	display:block;
      	clear:both;
      }
      ```

## 2. BFC

BFC是元素的一个隐藏属性，开启BFC的元素会具有一个独立的布局区域，这个区域会独立的布局，不会受到外部的元素的影响。

* 元素开启BFC后的特点:
  * 开启BFC的元素，不会被浮动元素所覆盖
  * 开启BFC的元素，子元素的外边距不会传递给父元素 
  * 开启BFC的元素，可以包含浮动的子元素

* 开启BFC的方式:

  1. 设置浮动

  2. 设置display: inline-block;      #尽量不要用这个，很多问题
  3. 设置overflow为一个非默认的值

# day 08

## 1. 定位（position）

- 定位是CSS中的一种高级的布局手段，通过定位可以将元素摆放在页面的任意位置。
- position的可选值：
  - static 默认值,静止,没有开启定位
  - relative 相对定位
  - absolute 绝对定位
  - fixed 开启元素固定定位
- 相对定位
  - 开启相对定位的元素,如果不设置偏移量元素不会发生任何变化
  - 相对定位的元素不会脱离文档流
  - 相对定位不会改变元素的性质
  - 相对定位的元素会提升一个层级
  - 相对定位的元素是相对于自身原本在文档流的位置进行定位的
- 绝对定位
  - 开启绝对定位的元素,如果不设置偏移量元素不会发生任何变化
  - 绝对定位会使元素脱离文档流
  - 绝对定位会改变元素的性质,行内元素变成块元素,块元素宽高被内容撑开
  - 绝对定位会使元素提升一个层级
  - 绝对定位元素相对于其包含块进行定位
    - 初始包含块
      - html(根元素)
    - 包含块
      - 默认情况下,包含块是离当前元素最近的块级祖先元素
      - 如果所有祖先元素都没有开启定位,则其包含块就是初始包含块
- 固定定位
  - 固定定位大部分特点都与绝对定位一样,不同点是固定定位是相对于视口进行定位的,并且固定定位元素会固定在网页的视口上,不会随网页滚动.
- 偏移量
  - top 元素上边和定位位置上边的距离
  - bottom 元素下边和定位位置下边的距离 
  - left 元素左边和定位位置左边的距离
  - right 元素右边和定位位置右边的距离
- 元素的层级
  - 我们可以通过z-index来设置定位元素的层级
  - 它需要一个整数作为参数，值越大层级越高，层级越高越优先显示. 层级一样,优先显示后边的
  -  祖先元素的层级再高也不会盖住后代元素

# day 09

## 1. 字体相关样式

- 字体大小

  - em

    1em等于一个font-size(当前元素的font-size)

  - rem

    1rem等于一个根元素(html)的font-size

- 行高

  - 行高可以指定一个像素值,也可以指定一个整数,指定一个数字的话就会是字体的指定的倍数.
  - 行间距=行高-字体大小

- @font-face  

  - 通过font-face可以让用户使用服务器中的字体
  - 使用过程中一定要注意版权问题

## 2. 文本的格式

1. 水平对齐

   text-align:

   - left 左
   - right 右
   - center 居中对齐
   - justify 两端对齐

2. 垂直对齐 vertical-align：

   ```
   baseline 基线 沿基线对齐
   top 和父元素顶部对齐
   bottom 和父元素的底部对齐
   super 上标
   sub 下标
   ```

3. 首行缩进 text-indent

4. text-decoration 文本修饰

   ```
   underline 下划线
   line-through 删除线
   overline 上划线
   none 没有线
   ```

5. white-space：如何处理空白内容

   ```
   normal 默认值，自动换行
   nowrap 不换行
   pre 保留文本的格式
   ```

6. text-overflow: 如何处理溢出文本

   ```
   ellipsis 使用省略号来表示溢出的内容
   ```

7. 溢出的文本显示省略号

   ```css
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   ```

# day 10

## 1.背景相关的样式

- background-repeat

  - 背景重复样式
  - 可选值:
    - repeat 水平垂直双方向重复
    - repeat-x 水平方向重复
    - repeat-y 垂直方向重复
    - no-repeat 不重复

- background-size

  - 设置背景图片的尺寸
  - 可选值:
    - 可以设置数值或百分比(auto)
    - cover  背景图片铺满元素
    - contain 让背景图片在元素中完整的显示

- background-position

  ```
  background-position用来设置背景图片的位置
      设置方式：
          1.可以通过位置关键字来设置位置
              top left right bottom center
          2.可以通过指定偏移量来设置背景图片的位置
              第一个值，水平反向偏移量
                  正值背景向右移动，负值向左移动
              
              第二个值，垂直方向的偏移量
                  正值向下走，负值向上走
  ```

- background-clip

  - 背景的剪切
  - 可选值:
    - border-box   边框以外不要
    - padding-box 内边距以外不要
    - content-box 内容以外不要

- background-origin

  - 背景定位的原点
  - 可选值:
    - border-box  边框开始
    - padding-box 内边距开始
    - content-box 内容开始

- background-attachment

  - 背景是否固定
  - 可选值:
    - scroll 滚动
    - fixed 背景在视口中固定

- background

  - 背景的简写属性，通过该属性可以同时设置所有的背景相关的样式，没有顺序要求.

## 2. 表格

- table 用来创建一个表格

- tr 表示表格中的一行

- td 表示一个单元格

  - 表格的列数有td最多的那行决定
  - 属性:
    - colspan 横向合并单元格
    - rowspan 纵向合并单元格

- thead

  - 表格的头部,用来放头部的tr

- tboby

  - 表格主体,用来放主体的tr
  - 如果创建表格时,没有指定tboby,这所有td会自动添加到一个tbody

- tfoot

  - 表格底部,用来放底部的tr

- th

  表头的单元格

## 3. 表单(form)

- 表单用来将用户的数据提交给服务器

- 常见表单:

  - 注册 登录i
  - 搜索框
  - 发微博

- 使用form标签创建一个表单

  ```html
    <form action="请求提交的路径">
    
  <!--      表单中需要添加一个一个的表单项！-->
      
  <!--    文本框 input标签，type的值是text 
  如果希望服务器可以正常接收表单的数据，必须要为表单项设置一个name属性  -->
       <input type="text" name='username'> 
       
  <!--  密码框 input标签，type是password -->
       <input type="password" name="password">
       
  <!--     提交按钮，input标签，type的值是submit
              通过value属性来指定按钮的文字
      -->
       <input type="submit" value="注册">
        
    </form>
  ```

## 4. 雪碧图

```css


/*        
        当按钮状态从link 切换到hover时 或 从hover切换到 active时，第一次会出现一个闪烁！
        浏览器在加载页面时需要先加载当前页面，然后再加载页面中引入的外部资源，
        而外部资源不是立刻加载的，外部资源需要在被使用时才会加载，当我们从link切换到hover状态时，需要去加载hover的图片
            而加载和显示直接存在一个时间差，这样在图片加载千会出现没有背景图片的情况，导致闪烁！
        
        解决方式：
            可以将多个按钮保存到一个图片中，这样我们一次性加载所有的图片，然后通过偏移量来修改我们需要显示的图片即可。这个技术，我们成为CSS Sprite（CSS精灵），这种图我们称为雪碧图。
        
            优点：
                1.将多个图片保存到一个图片中，降低发送请求的次数，增加用户的访问速度。
                2.将多个图片保存到一个图片里，也会降低图片的总大小，增快记载速度。
        
        */
```

```html
<!--  
      雪碧图的使用步骤：
          1.创建一个元素,大小就是图标的大小
          2.将雪碧图设置为元素的背景
          3.设置背景的偏移量，使其可以显示图标
  -->
```

# day 14

## 1. 过渡transition

- 设置过渡效果
- 可以同时设置过渡的所有效果
- 过渡属性
  - transiton-property
- 过渡时间
  - transiton-duration
- 过渡的延时
  - transition-delay
- 过渡的时间的函数
  - transition-timing-function

## 2.动画

- 关键帧

  - 关键帧用来指定动画每一步执行的位置

  - 创建关键帧

    ```css
    @keyframes 名字{
        from{
        }
        50%{
        }
        to{
        }
    }
    ```

  - 动画的属性

    - 动画的名字

      - animation-name

    - 动画的持续时间

      - animation-duration

    - 动画的延迟

      - animation-dalay

    - 动画的时间函数

      - animation-timing-function

    - 动画的执行次数

      - animation-iteration-count
        - infinite  无限次，循环

    - 动画的执行的方向

      - ```css
        animation-direction 动画运行的方向
          可选值
              normal 默认值，动画从 0% - 100%执行
              reverse 反转执行 100% - 0%执行
              alternate 第一次从0-100 第二次从 100-0 交替
              alternate-reverse
        ```

    - 动画的播放的状态

      ```css
      animation-play-state
              动画的播放的状态
                  可选值：
                      paused 动画暂停
                      running 动画运行（默认值）
      ```

## 3. 变形

- transform

  - 可以设置元素的位置，角度，大小的改变
  - translate X () translateY() translateZ(）
    - 位移的函数
  - rotateX () rotate Y() rotate Z()
    - 旋转的函数

# day 17

## 1. 弹性盒

- 在弹性容器中,各元素在主轴上排列.主轴可以是横向的,也可以是纵向的.

1. 弹性容器
   - 使用弹性盒,必须先设置弹性容器,设置弹性容器有如下两种方式.
     - display:flex
     - display:inline-flex

2. 弹性容器的属性.

   - 弹性元素的排布方向.

     - flex-direction
       - row	横向排列-自左向右.
       - row-reverse  自右向左
       - column 纵向排列. 自上向下
       - column-reverse 纵向排列.自下向上

   - 弹性元素是否换行.

     - flex-wrap
       - nowrap 不换行.
       - wrap 换行
       - wrap-reverse 反向换行.

   - 方向和换行的简写属性

     - flex-flow

   - 主轴上元素的对齐方式:

     - 水平的叫主轴

     - justify-content
       - flex-start     容器开头
       - flex-end   容器的结尾
       - center 容器的中心
       - space-between  两端对齐.
       - space-around    在元素前后平均分配   #自行测试
       - space-evenly   以偶数的形式平均分配    #自行测试

   - 垂轴上元素的对齐方式

     - 垂直的叫垂轴

     - align-items
       - flex-start 
       - flex-end
       - center
       - baseline    
       - stretch

   - 垂轴上元素的对齐方式.有多行元素时适用.

     - align-content

       - flex-start 

       - flex-end
       - center
       - space-around
       - space-evenly
       - stretch

3. 弹性元素的属性

   - 弹性元素就是弹性容器的子元素.
   - 弹性元素的增长系数.
     - flex-grow  # 忘了就查一下怎么用.  -->倍数.
   - 弹性元素的缩减系数
     - fkex-shrink    -->倍数.

   - 弹性元素的弹性标准
     - flex-basis     -->基数.
   - 简写属性:
     - flex:
       - initial  0 1 auto     可缩不可伸,基数按容器大小自动
       - auto    1 1 auto      可缩可伸,基数按容器大小自动.
       - none    0 0 auto     不可伸缩,基数按容器大小自动.
   - align-self
     - 设置弹性元素自身在垂轴上的对齐方式.
     - 用于覆盖容器中设置的align-items属性.
   - order
     - 用来指定弹性元素的排列顺序.

## 2. 视口

CSS像素 和 物理像素

-  在pc端,一般情况下,一个css像素对应一个物理像素.
- 但是在移动端,通常一个css像素应该对应多个物理像素,才可以保证网页可以正常的浏览,.

浏览器中用于呈现网页的区域叫视口(viewport). 视口通常不等于屏幕大小.

- 手机一般的默认视口都是980,所有移动端默认视口在浏览器体验时非常的差的.
- iphone x   1125/3 = 375 (完美视口)
- iphone 5   540/2 = 320 

### 媒体查询

```css
@media 查询条件{
    样式
}
```

1. 媒体类型：
   - all 适用于所有设备
   - print 适用于打印样式
   - screen 适用于屏幕
   - speech 适用于阅读器
2. 媒体功能
   - width  min-wdith  max-width 视口宽度
   - height, min-height, max-height 视口高度
   - aspect-ratio 宽高比
   - orientation  视口方向 (portrait纵向 landscape横向)
   - resolution 像素密度

用法示例：

```css
@media only screen and (min-width: 500px) and (max-width: 800px){
            body{
                background-color: green;
            }
        }
```



```css
@media not screen and (orientation: landscape){
    body{
        background-color: green;
    }
}
```

