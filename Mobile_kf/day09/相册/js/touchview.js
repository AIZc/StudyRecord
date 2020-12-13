/*
new Touchview('#box');

//依赖gesture.js
*/

function touchView(selector){
    let el = document.querySelector(selector);
    gesture(el,{
        start: function (e){
            this.initscale = transformCSS(el,'scale')
            this.initDegree = transformCSS(el,'rotateZ')
        },
        change: function (e){
            transformCSS(el,'scale',e.Movingscale*this.initscale)
            transformCSS(el,'rotateZ',e.disDegree+this.initDegree)
        },
        end: function (e){
        }
    })
}