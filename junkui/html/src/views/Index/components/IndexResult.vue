<template>
    <div class="w-full h-full">
        <div class="absolute bottom-0 left-0 w-full h-full" :class="{'pop-position': !ifShowList}" v-show="!ifShowList"  @click="ifShowList = !ifShowList"></div>
        <div class="absolute bottom-0 left-0 w-full h-full bg-list-black b-r-lr-15 open-panel-after" :class="{'open-panel-before': ifShowList}">
            <div class="h-45" @click="ifShowList = !ifShowList">
                <Divider v-show="ifShowList">This is a result</Divider>    
                <Divider v-show="!ifShowList" class="rewrite-color-white">识别结果</Divider>
            </div>
            <div class="p-30 h-full o-y-scroll flex a-center flex-column" v-show="result">
                <div class="w-200 h-200 bg-list-blue b-r-10 p-10 o-hidden">
                    <img class="w-full h-full b-r-10" :src="data.img">
                </div>
                <div class="text-white fs-14 m-v-20 text-center">可信度：{{data.score}}%</div>
                <div class="text-white fs-14 p-h-20 text-center">{{data.poem}}</div>
            </div>
            <div class="text-white text-center m-50 fs-15" v-show="!result">
                您的🍉被猹偷了
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShowList: true,
            result: false,
            data: {
                id: '',
                img: '',
                score: '',
                poem: ''
            }
        }
    },
    methods: {
        getResult(res) {
            if (res === '' || res === undefined || !Object.keys(res).length) return this.result = false
            this.data = res
            return this.result = true
        },
        changeStatus(curStatus) {
            this.ifShowList = curStatus
        },
    }
}
</script>

<style lang="scss" scoped>
.b-r-lr-15 {
    border-radius: 15px 15px 0 0;
}
.bg-list-black {
    background: #222433;
}
.bg-list-blue {
    background: #292f47;
}
.pop-position {
    transform: translateY(-25%);
    background: rgba(0, 0, 0, .5);
    transition: all .5s;
}
.open-panel-after {
    transform: translateY(25%);
    background: #1f282f;
    transition: all .5s;
}
.open-panel-before {
    transform: translateY(92%);
    background: #fff;
    transition: all .5s;
}
.rewrite-color-white {
    color: #fff!important;
}
.p-b-260 {
    padding-bottom: 260px;
}
</style>