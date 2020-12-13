/*
    new Clock('canvas',{
        width:300,
        height:300
    })
*/


function Clock(selector,options) {
    //创建弧度计算因子
    let canvas = document.querySelector(selector);
    let ctx = canvas.getContext('2d')
    canvas.width = options && options.width ? options.width*2 : 400;
    canvas.height = options && options.height ? options.height*2 : 400;

    setInterval(function () {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        //绘制表盘
        ctx.save()
        ctx.beginPath()
        ctx.arc(canvas.width/2,canvas.height/2,150*canvas.width/400,0,360/180*Math.PI)
        ctx.lineWidth = 1*canvas.width/400
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.stroke()

        //移动坐标系
        ctx.translate(canvas.width/2,canvas.height/2)
        ctx.rotate(-90/180*Math.PI)

        ctx.save()  //保存坐标系

        //绘制表盘刻度
        for (let i=1;i<=60;i++){
            ctx.beginPath()
            ctx.rotate(-6/180*Math.PI)
            if (i%5 === 0){
                ctx.lineWidth = 4*canvas.width/400
                ctx.moveTo(125*canvas.width/400,0)
            }else{
                ctx.lineWidth = 2*canvas.width/400
                ctx.moveTo(135*canvas.width/400,0)
            }
            ctx.lineTo(145*canvas.width/400,0)
            ctx.stroke()
        }
        ctx.restore()

        let date = new Date()
        let h = date.getHours();  //  h*30 + m/60*30 + s/3600*30;
        let m = date.getMinutes();  //  m*6 + s/60*6;
        let s = date.getSeconds(); // s*6;
        let H = h*30 + m/60*30 + s/3600*30;
        let M = m*6 + s/60*6;
        let S = s*6;
        ctx.save()
        ctx.rotate(S/180*Math.PI)
        ctx.beginPath()
        ctx.lineWidth = 2*canvas.width/400
        ctx.moveTo(-15*canvas.width/400,0);
        ctx.lineTo(130*canvas.width/400,0);
        ctx.stroke()
        ctx.restore()

        ctx.save()
        ctx.rotate(M/180*Math.PI)
        ctx.beginPath()
        ctx.strokeStyle = 'deeppink'
        ctx.lineWidth = 4*canvas.width/400
        ctx.moveTo(-15*canvas.width/400,0);
        ctx.lineTo(120*canvas.width/400,0);
        ctx.stroke()
        ctx.restore()

        ctx.save()
        ctx.rotate(H/180*Math.PI)
        ctx.beginPath()
        ctx.lineWidth = 6*canvas.width/400
        ctx.strokeStyle = 'orange'
        ctx.moveTo(-15*canvas.width/400,0);
        ctx.lineTo(110*canvas.width/400,0);
        ctx.stroke()
        ctx.restore()

        //绘制圆形小点
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(0,0,6*canvas.width/400,0,360/180*Math.PI)
        ctx.fill()
        ctx.restore()
        ctx.restore()
    },1000/60)
}