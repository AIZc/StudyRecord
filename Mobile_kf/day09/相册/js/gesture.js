(function (w) {
    function gesture(el,callback) {
        el.addEventListener('touchstart',function (e) {
            if (e.touches.length>=2){
                //计算两个触点的直线距离
                this.initdisC = getTouchesDis(e.touches[0],e.touches[1])
                this.hasGestureStartTriggered = true;
                callback.start(e)
                //计算起始状态夹角
                this.initjDegree = getTouchesDegree(e.touches[0],e.touches[1])
            }
        })
        el.addEventListener('touchmove',function (e) {
            if (e.touches.length>=2){
                this.movingdisC = getTouchesDis(e.touches[0],e.touches[1])
                this.movingjDegree = getTouchesDegree(e.touches[0],e.touches[1])
                e.disDegree = this.movingjDegree - this.initjDegree
                e.Movingscale = this.movingdisC/this.initdisC
                this.innerHTML = e.disDegree
                callback.change(e);
            }
        })
        el.addEventListener('touchmove',function (e) {
            if (e.touches.length<2 &&el.hasGestureStartTriggered){
                callback.end(e)
                this.hasGestureStartTriggered = false;
            }
        })
    }
    //返回两个触点的距离
    function getTouchesDis(t1,t2) {
        let disX = Math.abs(t1.clientX-t2.clientX)
        let disY = Math.abs(t1.clientY-t2.clientY)
        return Math.sqrt(disX*disX+disY*disY)
    }

    function getTouchesDegree(t1,t2) {
        let disX = t1.clientX-t2.clientX
        let disY = t1.clientY-t2.clientY
        //初始两个触点的夹角的角度
        let huDegree = Math.atan2(disY,disX)
        return  huDegree*180/Math.PI
    }


    w.gesture = gesture
} )(window)