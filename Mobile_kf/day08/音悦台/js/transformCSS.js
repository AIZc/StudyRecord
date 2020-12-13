/*
    函数
    transformCSS

    作用
    1. 快速设置元素的 transform 变形   ele.style.transform = 'translateX(100px)';
    transformCSS(ele, 'translateX', 100);
    transformCSS(ele, 'translateY', 100);
    transformCSS(ele, 'rotate', 50);
    transformCSS(ele, 'scale', 2);
    transformCSS(ele, 'scaleY', 1);


    2. 读取元素 transform 变形值
    transformCSS(ele, 'translateX'); // 100
    transformCSS(ele, 'rotate'); // 50

    prop  property 属性
    val   value    属性值

    #box{
        left:100px;

        transform: translateX(100px)
    }



 */
/**
 *
 * @param el     元素对象
 * @param prop   变形的样式
 * @param val    变形的样式值
 *
 * 多次的设置 需要保存前面的样式
 * translateX  100
 * rotate      45
 *
 */
// transformCSS(box, 'translateX', 200);
// var styles = {};//  {translateX: 100}

//
(function (w) {

    function transformCSS(el, prop, val) {
        //初始化样式仓库
        if (el.store === undefined) {
            el.store = {};
        }
        //设置
        if (arguments.length == 3) {
            el.style.transform = prop + '(' + val + 'px)';

            //向对象中存入参数
            el.store[prop] = val;
            //设置样式
            /**
             *
             * {translateX: 200, rotate: 45, scale: 3}
             ||
             ||
             ||
             \/
             transform: translateX(200px)  rotate(45deg)  scale(3);
             */
            var str = '';
            for (var i in el.store) {
                // i  translateX  rotate scale
                // styles[i]  200    45    3
                switch (i) {
                    case 'translateX':
                    case 'translateY':
                    case 'translateZ':
                        str += i + '(' + el.store[i] + 'px) ';
                        break;
                    case 'rotate':
                    case 'rotateX':
                    case 'rotateY':
                    case 'rotateZ':
                        str += i + '(' + el.store[i] + 'deg) ';
                        break;

                    case 'scale':
                    case 'scaleX':
                    case 'scaleY':
                    case 'scaleZ':
                        str += i + '(' + el.store[i] + ') ';
                        break;
                }
                //设置变形样式
                el.style.transform = str;
            }
        }

        //样式读取
        if (arguments.length == 2) {
            //判断 如果设置了 则返回设置的值
            if (el.store[prop]) {
                return el.store[prop];
            }
            //如果没有设置  translate  rotate  0   scale  1  scaleX  scaleY  scaleX  scale
            //判断样式是否以 scale 开头
            var start = prop.substr(0, 5);
            if (start === 'scale') {
                return 1;
            } else {
                return 0;
            }
        }
    }

    w.transformCSS = transformCSS;

})(window);




