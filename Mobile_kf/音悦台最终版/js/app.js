//获取元素
var app = document.getElementById('app');
var menuBtn = document.querySelector('#header .up .menu');
var menuHider = document.querySelector('#header .hider');
var input = document.querySelector('#header .down #search');
var nav = document.querySelector('#nav');
var navWrap = nav.querySelector('.nav-wrapper');
var navList = nav.querySelectorAll('li');
//判断是否左右滑动
var isHori = 0;
//表示当前导航是否正在滑动
var isMoving = false;
//全局代码
(function () {

    // 阻止默认行为
    app.addEventListener('touchstart',function (e) {
        e.preventDefault();
    });

// 移动端的适配

    document.documentElement.style.fontSize = document.documentElement.clientWidth/10+'px';
    window.onresize = function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth/10+'px';
    };
}());


/*头部的事件*/
(function () {
    //点击菜单 显示隐藏
    menuBtn.addEventListener('touchstart',function (e) {
        //使按钮的状态改变
        this.classList.toggle('open');
        //使菜单的显示状态改变
        menuHider.classList.toggle('open');
    });

//input获得焦点
    input.addEventListener('touchstart',function (e) {
        e.stopPropagation();
    });
//使input丧失焦点
    app.addEventListener('touchstart',function (e) {
        input.blur();
    });
}());


/*导航区*/
(function () {
    nav.addEventListener('touchstart',function (e) {
        //获取起始点触点位置
        navWrap.style.transition = 'none';
        this.x = e.targetTouches[0].clientX;
        //当前包裹元素的偏移量
        // this.left = navWrap.offsetLeft
        this.left =  navWrap.offsetLeft;
    })
    nav.addEventListener('touchmove',function (e) {

        this._x = e.targetTouches[0].clientX;
        // this._left = transformCSS(navWrap,'translateX')
        this._left = this._x - this.x + this.left;
        navWrap.style.left = this._left+'px';
        isMoving = true
        e.stopPropagation()
        e.preventDefault()
    },)

    //绑定触摸结束事件
    nav.addEventListener('touchend',function (e) {
        //获取当前包裹元素的translateX 的值
        this.__x = navWrap.offsetLeft;

        if (this.__x>=0){
            this.__x = 0;
        }
        if (this.__x<=nav.offsetWidth-navWrap.offsetWidth){
            this.__x = nav.offsetWidth-navWrap.offsetWidth;
        }
        navWrap.style.transition = '0.5s cubic-bezier(.28,1.15,.58,1.9)'
        navWrap.style.left = this.__x+'px';
        isMoving = false;

    })

    //导航切换
    navList.forEach(function (li) {

        li.addEventListener('touchend',function () {
            if (isMoving) return;
            navList.forEach(function (i) {
                i.classList.remove('active');
            })
            this.classList.add('active');
        });
    });
}());


/*轮播图*/
(function () {
    var container = document.getElementById('swiper-container');
    var wrapper = container.querySelector('.swiper-wrapper')
    var index = 0;//当前显示幻灯片的下标
    var dots = container.querySelectorAll('.swiper-pagination span')
    var imgs = container.querySelectorAll('.swiper-slide>img')

    container.addEventListener('touchstart',function (e) {

        this.x = e.targetTouches[0].clientX
        this.y = e.targetTouches[0].clientY
        this.left = wrapper.offsetLeft
        this.starttime = Date.now()
        //移除过渡
        wrapper.style.transition = 'none'
    })

    container.addEventListener('touchmove',function (e) {
        this.movingx = e.targetTouches[0].clientX
        this.movingy = e.targetTouches[0].clientY
        this.movingLeft = this.movingx - this.x + this.left
        this._top = this.movingy - this.y;
        if(Math.abs(this.movingx-this.x)+10>Math.abs(this._top)){
            isHori = 1
        }
        if (isHori === 1){
            e.stopPropagation()
            e.preventDefault()
            isHori = 0
        }
        wrapper.style.left = this.movingLeft+'px'

    })
    container.addEventListener('touchend',function (e) {
        this.movedx = e.changedTouches[0].clientX
        this.movedleft = this.movedx-this.x
        len = dots.length
        wrapper.style.transition = 'all 0.3s'
        this.endtime = Date.now()
        if (this.endtime-this.starttime<300){
            if (this.movedleft<0){
                index++
                if (index>len-1){
                    index = 0
                    wrapper.style.transition  = 'all 0s'
                }
            }else if(this.movedleft>0){
                index--
                if (index<0){
                    index = len-1
                    wrapper.style.transition = 'all 0s'
                }
            }
        }else{
            if (this.movedleft<0){
                if (this.movedleft<container.clientWidth/-3){
                    index++
                }
                if (index>len-1){
                    index = len-1
                }
            }else if(this.movedleft>0){
                if (this.movedleft>container.clientWidth/3){
                    index--
                }
                if (index<0){
                    index = 0
                }
            }
        }

        this.movedleft = -container.offsetWidth*index
        wrapper.style.left = this.movedleft+'px'

        dots.forEach(function (dot) {
            dot.classList.remove('active')
        })
        dots[index].classList.add('active')
    })

    var fx = imgs[0].offsetHeight + 'px'
    container.style.height = fx
    //包裹元素的宽度
    var count  = imgs[0].length
    wrapper.style.width = count*100+'%'

}());

var index = 0;//当前显示幻灯片的下标

/*楼层页面切换*/
(function () {
    let floors = document.querySelectorAll('.floor')
    floors.forEach(function (floor) {
        // let floor = document.querySelector('.floor')
        let nav_items = floor.querySelectorAll('.nav-item')
        let lcContainer = floor.querySelector('.container');
        let lcwrapper = lcContainer.querySelector('.swiper-wrapper');
        let slides = lcContainer.querySelectorAll('.swiper-slide');
        let movingborder = floor.querySelector('.floor .moving-border')
        var firstSlides = slides[0]
        function f1(index) {
            lcwrapper.style.left = -lcContainer.offsetWidth*index+'px';
            movingborder.style.left = index * movingborder.offsetWidth + 'px';

            setTimeout(function () {
                if (slides[index].getAttribute('has-loaded')==='0'){
                    //ajax请求
                    slides[index].innerHTML = firstSlides.innerHTML
                    slides[index].setAttribute('has-loaded','1')
                }
            },2000)
        }
        lcContainer.addEventListener('touchstart',function (e) {
            this.x = e.targetTouches[0].clientX
            this.y = e.targetTouches[0].clientY
            this.left = lcwrapper.offsetLeft
            //移除过渡
            lcwrapper.style.transition = 'none'
        });

        lcContainer.addEventListener('touchmove',function (e) {
            this.movingx = e.targetTouches[0].clientX
            this.movingy = e.targetTouches[0].clientY
            this.movingLeft = this.movingx - this.x + this.left
            this._top = this.movingy - this.y;
            if(Math.abs(this.movingx-this.x)>Math.abs(this._top)){
                isHori = 1
            }
            if (isHori === 1){
                e.stopPropagation()
                e.preventDefault()
            }
            if (this.movingLeft>=0){
                this.movingLeft=0
            }
            if(this.movingLeft<lcContainer.offsetWidth-lcwrapper.offsetWidth+1){
                this.movingLeft=lcContainer.offsetWidth-lcwrapper.offsetWidth+1
            }
            lcwrapper.style.left = this.movingLeft+'px'
        })

        lcContainer.addEventListener('touchend',function (e) {

            this.movedx = e.changedTouches[0].clientX
            this.movedleft = this.movedx-this.x;
            lens = slides.length;
            lcwrapper.style.transition = 'all 0.3s';
            if (this.movedleft<-lcContainer.offsetWidth/3){
                index++
                if (index>lens-1){
                    index = lens-1
                    lcwrapper.style.transition = 'all 0s'
                }
            }else if(this.movedleft>lcContainer.offsetWidth/3){
                index--
                if (index<0){
                    index = 0
                    lcwrapper.style.transition = 'all 0s'
                }
            }
            console.log(index+1)
            f1(index)
            isHori = 0
        })

        nav_items.forEach(function (item,indexOf) {
            item.addEventListener('touchend',function () {
                index = indexOf
                lcwrapper.style.transition = 'none'
                f1(index)
            })
        })
        let lch = slides[0].offsetHeight + 'px'
        lcContainer.style.height = lch
    })


}());


/*设置滚动条*/
(function (){
    touchScroll('#app','#main')
}());



