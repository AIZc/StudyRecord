/*
*
* 构造函数
*touchScroll
* 封装
*
* */

function touchScroll(container, contentl) {
    //获取外层的容器元素
    let app = document.querySelector(container);
    let content = app.querySelector(contentl);
    let scroll = null;
    let html = '';
    for (let i = 0; i <= 100; i++) {
        html += i + '<br>';
    }
    content.innerHTML = html;
    app.addEventListener('touchstart', function (e) {
        // content.style.transition = 'none'
        this.y = e.targetTouches[0].clientY
        this.top = transformCSS(content, 'translateY')
        //时间
        this.startTime = Date.now()

        //即点即停
        if (content.timer && content.timer['translateY']) {
            clearInterval(content.timer['translateY'])
            clearInterval(scroll.timer['translateY'])
        }
    })
    app.addEventListener('touchmove', function (e) {
        this._y = e.targetTouches[0].clientY
        this._top = this._y - this.y + this.top
        transformCSS(content, 'translateY', this._top)
        //修改滚动条的位置
        this.scrolly = -scroll.offsetHeight * this._top / app.offsetHeight
        transformCSS(scroll, 'translateY', this.scrolly)
    })
    app.addEventListener('touchend', function (e) {
        let scrollY = transformCSS(scroll, 'translateY')
        let translateY = transformCSS(content, 'translateY')
        //惯性移动
        this.__y = e.changedTouches[0].clientY
        let disY = this.__y - this.y
        this.endTime = Date.now()
        let disTime = this.endTime - this.startTime
        let v = disY / disTime
        let s = v * 120
        if (disTime <= 200) {
            this._top += s
        }
        if (this._top > 0) {
            this._top = 0
        }

        if (this._top < this.offsetHeight - content.offsetHeight) {
            this._top = this.offsetHeight - content.offsetHeight
        }


        if (this.scrolly < 0) {
            this.scrolly = 0
        }

        if (this.scrolly > app.offsetHeight - scroll.offsetHeight) {
            this.scrolly = app.offsetHeight - scroll.offsetHeight
        }
        // content.style.transition = 'all 0.5s'
        // transformCSS(content,'translateY',this._top)
        // transformCSS(scroll,'translateY',this.scrolly)
        tweenAnimation(content, 'translateY', translateY, this._top, 500, 10, 'easeOut')
        tweenAnimation(scroll, 'translateY', scrollY, this.scrolly, 500, 10, 'easeOut')
    })

    //初始化
    app.init = function () {
        //父级元素设置相对定位
        app.style.position = 'relative';
        //创建滚动条
        scroll = document.createElement('div')
        scroll.className = 'scroll-bar'
        scroll.style.position = 'absolute';
        scroll.style.right = 0;
        scroll.style.top = 0;
        scroll.style.width = '1.5%';
        scroll.style.borderRadius = '3px';
        scroll.style.backgroundColor = 'black';
        scroll.style.opacity = '0.5';
        //将滚动条插入到容器中
        app.appendChild(scroll)
        scroll.style.height = app.offsetHeight * app.offsetHeight / content.offsetHeight + 'px'
    }
    app.init()
}