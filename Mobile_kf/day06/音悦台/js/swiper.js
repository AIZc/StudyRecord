(function (w) {
    /**
     * new Swiper('#swiper', {
     *     auto: true,       //是否自动执行
     *     loop: true,       //是否循环  无缝滚动
     *     pagination: true, //是否显示导航点
     *     time: 2000     //切换幻灯片的时间
     *     callback: {
     *         start: function(){},
     *         move: function(){},
     *         end: function(){}
     *     }
     * });
     *
     */
    // new Object   {}    function A(){}
    /**
     *  new Swiper('#swiper');
     *  new Swiper('#swiper', {});
     */
    function Swiper(selector, options) {
        //选项参数获取
        var auto = options ? options.auto : false;
        var loop = options ? options.loop : false;
        var pagination = options ? options.pagination : false;
        var time = options ? (options.time || 2000) : 2000;
        var callback = options ? (options.callback || false) : false;
        var swiper = null;
        //获取元素
        if(typeof selector === 'string'){
            swiper = document.querySelector(selector);
        }
        if(typeof selector === 'object'){
            swiper = selector;
        }
        var swiperWrapper = swiper.querySelector('.swiper-wrapper');
        //初始化 总共元素的个数
        var len = swiperWrapper.querySelectorAll('.swiper-item').length;
        //复制一份swiperWrapper 内容
        if (loop) {
            swiperWrapper.innerHTML += swiperWrapper.innerHTML;
        }
        var index = 0;

        //状态变量
        var isHori = false;
        var isFirst = true;
        var paginations = null;
        var daohang = swiper.querySelector('.pagination');
        var swiperItems = swiper.querySelectorAll('.swiper-item');
		var length = swiperItems.length;

        //初始化操作
        swiper.init = function () {
            //设置
            this.style.width = '100%';
            this.style.position = 'relative';
            //设置 wrapper 的宽度
            //获取元素的个数
            //设置宽度
            swiperWrapper.style.width = length * 100 + '%';
            //设置每一个元素的宽度  10   1/10    20  1/20
            var width = 1 / length * 100 + '%'
            swiperItems.forEach(function (item) {
                item.style.width = width;
            });

            w.addEventListener('load', function(){
                //为swiper元素设置高度
            });

            //根据导航点配置 动态生成
            if(pagination){
                //动态生成导航点
                for(var i=0;i<len;i++){
                    var span = document.createElement('span');
                    if(i == 0){
                        span.className = 'active';
                    }
                    //将 span 插入到 pagination 元素中
                    daohang.appendChild(span);
                }
                paginations = swiper.querySelectorAll('.pagination span');
            }

            if(callback && typeof callback.init === 'function'){
                callback.init();
            }
        }
        swiper.init();

        //绑定事件
        swiper.addEventListener('touchstart', function (e) {
            //停止定时器 1
            clearInterval(this.timer);
            this.timer = null;
            //判断无缝滚动
            if (loop) {
                if (index == 0) {
                    index = len;// length=10  len = 5
                    transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth)
                } else if (index == length - 1) {
                    index = len - 1;
                    transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth)
                }
            }
            //获取当前的触点位置
            this.x = e.targetTouches[0].clientX;
            this.y = e.targetTouches[0].clientY;
            //获取当前包裹元素的位置 ?????????
            this.left = transformCSS(swiperWrapper, 'translateX');
            //移除transition
            swiperWrapper.style.transition = 'none';
            //获取当前的触摸时间
            this.startTime = (new Date).getTime();
            //增加用户的自定义回调代码
            if(callback && typeof callback.start === 'function'){
                callback.start();
            }
        });

        //绑定触摸移动事件
        swiper.addEventListener('touchmove', function (e) {
            //获取当前的触点的位置
            this._x = e.targetTouches[0].clientX;
            this._y = e.targetTouches[0].clientY;

            var disX = Math.abs(this._x - this.x);
            var disY = Math.abs(this._y - this.y);
            if (isFirst) {
                isFirst = false;
                //水平移动
                if (disX > disY) {
                    isHori = true;
                } else {
                    isHori = false;
                }
            }
            if (!isHori) return;
            //计算新的left值
            var newLeft = this._x - this.x + this.left;

            //设置left 的值
            transformCSS(swiperWrapper, 'translateX', newLeft);
            if (isHori) e.preventDefault();
            if(callback && typeof callback.move === 'function'){
                callback.move(e);
            }
            e.stopPropagation();
        });

        //绑定触摸结束事件
        swiper.addEventListener('touchend', function (e) {
            //还原状态值
            isFirst = true;

            //判断是否是水平移动
            if(isHori){
                e.stopPropagation();
            }else{
                return;
            }


            //重启定时器
            this.autoRun();
            this._x = e.changedTouches[0].clientX;
            this.endTime = (new Date).getTime();
            //计算两次的时间间隔
            var disTime = this.endTime - this.startTime;
            //计算两次触摸的距离
            var disX = Math.abs(this._x - this.x);
            if (disX > swiper.offsetWidth / 2 || disTime < 200) {
                if (this._x > this.x) {
                    index--;
                } else if (this._x < this.x) {
                    index++;
                }
            }
            swiper.switchSlide(index);

        });

        //根据索引切换幻灯片
        swiper.switchSlide = this.switchSlide = function (i) {
            //检测越界  ctrl + d
            if (i < 0) {
                i = 0;
            }
            if (i > length - 1) {
                i = length - 1;
            }
            //增加 transition 过渡
            swiperWrapper.style.transition = 'all .5s';
            //根据i显示不同的图片
            var left = -swiper.offsetWidth * i;
            //修改 left 的值   translateX
            transformCSS(swiperWrapper, 'translateX', left);
            //处理导航点的位置
            if(pagination){
                paginations.forEach(function (item) {
                    //移除 active class
                    item.classList.remove('active');
                });
                paginations[i % len].classList.add('active');
            }
            //这行代码至关重要
            index = i;
            if(callback && typeof callback.end === 'function'){
                callback.end();
            }
        }

        //自动执行
        swiper.autoRun = function () {
            //如果不是自动的 就返回 不执行了
            if (!auto) return;
            if (this.timer) return;
            this.timer = setInterval(function () {
                //修改索引
                index++;
                //切换幻灯片
                swiper.switchSlide(index);
            }, time);
        }
        swiper.autoRun();

        //动画结束事件
        if (loop) {
            swiperWrapper.addEventListener('transitionend', function (e) {
                //p判断
                if (index >= length - 1) {
                    //修改索引
                    index = len - 1;
                    //清除过渡
                    swiperWrapper.style.transition = 'none';
                    //调整 wrapper 的位置
                    transformCSS(swiperWrapper, 'translateX', -index * swiper.offsetWidth);
                }
            });
        }
        //赋值
        this.node = swiper;
        this.getIndex = function(){
            return index;
        }
    }
    w.Swiper = Swiper;
})(window);