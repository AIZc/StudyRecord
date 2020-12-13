/*

能够实现对元素的动画控制

函数名
tweenAnimation

使用示例
tweenAnimation(element,'width',200,1000,time,jg,'linear')
标签名  属性   开始状态  介绍状态  时间  间隔  动画效果
*/
//动画切换的函数集合
/*tween类*/
var Tween = {
    Linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOut: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOut: function (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }
}

function tweenAnimation(element, ppty, start, end, time, jiange, type = 'Linear',movecallback) {
    //初始化参数

    let t = 0;
    let b = start;
    let c = end - start;
    let d = time;
    let i = 0
    if (element.timer === undefined) {
        element.timer = {}
    }
    element.timer[ppty] = setInterval(function () {
        if (t >= d) {
            clearInterval(element.timer[ppty])
            return;
        }
        //时间自增
        t += jiange;
        let Sn = Tween[type](t, b, c, d);
        switch (ppty) {
            case 'width':
            case 'height':
            case 'left':
            case 'top':
                element.style[ppty] = Sn + 'px'
                break;
            case 'translateX':
            case 'translateY':
            case 'translateZ':
            case 'scaleX':
            case 'scaleY':
            case 'scaleZ':
            case 'scale':
            case 'rotateX':
            case 'rotateY':
            case 'rotateZ':
            case 'rotate':
                transformCSS(element, ppty, Sn)
                break;
            case 'opacity':
                element.style[ppty] = Sn;
        }
        i++;
        if (movecallback && typeof movecallback === 'function'){
            movecallback()
        };
    }, jiange);
}