let app = document.querySelector('#app')
let main = app.querySelector('main')
let content = main.querySelector('#content')
let imglist = content.querySelector('#img-list')
let pullUpdate = content.querySelector('.pull-up-update')
let bigImg = document.querySelector('#big-image-show')
let close = bigImg.querySelector('.close')
let showImg = bigImg.querySelector('#show-area img')
let isMoving = false;
//阻止默认行为
app.addEventListener('touchstart',function (e) {
    e.preventDefault()
})
window.onload = function () {
     let touchscroll = new touchScroll('main','#content',{
        move : function () {
            lazyload()
            let contentY = transformCSS(content,'translateY')
            let minContentY = main.offsetHeight-content.offsetHeight
            if (contentY<minContentY){
                //缩放比例
                pullUpdate.sfbl = Math.min(Math.abs(contentY-minContentY)/pullUpdate.offsetHeight,1)
                transformCSS(pullUpdate,'scale',pullUpdate.sfbl)
            }
        },
        end : function () {
            if (pullUpdate.sfbl>=1){
                createLi()
                //更新滚动条的高度和位置
                touchscroll.modify()
                touchscroll.cleartime()
                pullUpdate.sfbl=0;
                bigImgShow()
            }
        }
    })
}


/*初始化数据仓库*/
let imgsData = [];

let num = 16;
let page = 1;
for (let i=0;i<100;i++){
    imgsData[i] = 'https://picsum.photos/id/'+i+'/200/300'

}

//<li><img src="https://picsum.photos/150/150" alt=""></li>
//声明创建li的函数
function createLi() {
    let start = (page-1)*num;
    let end = page * num;
    for (let i=start;i<end;i++){
        let li = document.createElement('li')
        li.dataset.isloaded = 0;
        let img = document.createElement('img')
        // img.src = imgsData[i]
        li.dataset.src = imgsData[i]
        li.appendChild(img);
        imglist.appendChild(li);
    }
    //页码自增
    page++;

    //检测图片状态
    //遍历图片
    lazyload();
}
createLi();

function lazyload() {
    let lis = document.querySelectorAll('#img-list li')
    lis.forEach(function (li) {
        //获取元素相对于父元素的偏移量
        let oT = li.offsetTop
        //获取容器元素的高度
        let mainH = main.offsetHeight
        let contentY = -transformCSS(content,'translateY')
        if (oT<= mainH+contentY){
            //加载图片
            if (li.dataset.isloaded==='0'){
                let img = li.querySelector('img')
                img.src = li.dataset.src
                li.dataset.isloaded = 1
            }
        }
    })
}

function bigImgShow() {
    let lis = document.querySelectorAll('li');

    lis.forEach(function (li){
        li.addEventListener('touchend',function (e) {
            if (isMoving) return;
            transformCSS(bigImg, 'scale', 1)
            showImg.src = this.dataset.src
            showImg.style.width = '60vw'

        })
    })
    close.addEventListener('touchstart',function (e) {
        // this.starty = e.touches[0].clientY
        transformCSS(bigImg,'scale',0)
        showImg.src = 'none'
        transformCSS(showImg,'rotateZ',0)
        transformCSS(showImg,'scale',1)
    })

    main.addEventListener('touchmove',function (e) {
        // if (Math.abs(e.touches[0].clientY-this.starty)>10){
            isMoving = true;
        // }
    })
    main.addEventListener('touchend',function (e) {
        isMoving = false;
    })
}
bigImgShow()

//实现图片的旋转缩放
new touchView('#show-area img')
