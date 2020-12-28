<template>
    <div class="w-full h-full">
        <div class="absolute top-0 left-0 zIndex-2 w-full h-full" :class="{'pop-position': !ifShowTake}" v-show="!ifShowTake"  @click="ifShowTake = !ifShowTake"></div>
        <div class="absolute top-0 left-0 zIndex-2 w-full h-full b-r-lr-15 p-20 open-panel-after" :class="{'open-panel-before': ifShowTake}">
            <div class="w-full h-100 absolute bottom-0 left-0 flex j-center a-center">
                <div class="absolute take-position w-100 h-100 bg-main-grey b-round box-shadow-grey flex j-center a-center" v-show="ifShowTake"  @click="ifShowTake = !ifShowTake">
                    <div class="w-60 h-60 bg-grey b-round box-shadow-grey flex j-center a-center">
                        <Icon type="md-camera" class="fs-30 bg-main-yellow"/>
                    </div>
                </div>
                <div class="absolute take-position w-100 h-100 bg-main-grey b-round box-shadow-grey flex j-center a-center" v-show="!ifShowTake" @click="takePhoto()">
                    <div class="w-60 h-60 bg-grey b-round box-shadow-grey flex j-center a-center">
                        <Icon type="md-camera" class="fs-30"/>
                    </div>
                </div>
            </div>
            <div class="relative w-full h-main p-15 flex j-center a-center">
                <div class="absolute bottom-20 w-full h-p-65 b-r-10">
                        <div class="w-full h-full absolute top-0 left-0 flex j-center a-center">
                            <div class="h-300 w-300 b-round border-dotted b-10"></div>
                        </div>
                        <video class="w-full h-full bg-white b-r-10"
                            ref="video"
                            >
                        </video>
                        <canvas width="320" height="370" class="bg-white b-r-5 d-none"
                                ref="img"
                                >
                        </canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShowTake: true,
            ifSuccess: false
        }
    },
    mounted() {
        this.openVideo()
    },
    methods: {
    	takePhoto() {
            const ctx = this.$refs.img.getContext('2d')
            ctx.drawImage(this.$refs.video, 0, 0, 320, 370)
            const _base64 = this.$refs.img.toDataURL('image/png')
            this.ifShowTake = !this.ifShowTake
            this.ifSuccess = !this.ifSuccess
            this.$emit('sendCurStatus', this.ifSuccess)
            let self = this
            setTimeout(async () => {
                try {
                    let res = await self.$api.post('/water/', {
                        img: _base64
                    })
                    if (!Object.keys(res).length) return self.$Message.warning('上传图片失败')
                    // 返回结果
                    this.ifSuccess = !this.ifSuccess
                    this.$emit('sendCurStatus', this.ifSuccess)
                    this.$emit('sendResult', res)
                    return self.$Message.success('上传成功')
                } catch(err) {
                    this.ifSuccess = !this.ifSuccess
                    this.$emit('sendCurStatus', this.ifSuccess)
                    if (err) return self.$Message.error('请求超时')
                }
            }, 1000)
        },
        openVideo() {
            let constraints = {
                video: {
                    width: 350,
                    height: 320,
                    facingMode: { exact: "environment" } 
                }
            }
            window.navigator.getUserMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
            navigator.mediaDevices.getUserMedia(constraints)
            .then(mediaStream => {
                this.$refs.video.srcObject = mediaStream
                this.$refs.video.play()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.b-r-lr-15 {
    border-radius: 0 0 15px 15px;
}
.zIndex-2 {
    z-index: 2;
}
.pop-position {
    transform: translateY(25%);
    background: rgba(0, 0, 0, .5);
    transition: all .5s;
}
.open-panel-after {
    transform: translateY(-25%);
    background: #fff;
    transition: all .5s;
}
.open-panel-before {
    transform: translateY(-92%);
    background: #fff;
    transition: all .5s;
}
.rewrite-color-white {
    color: #fff!important;
}
.take-position {
    bottom: -50px;
}
.loading-position {
    top: 50%;
    left: 50%;
    margin: -4em;
    position: absolute;
}
</style>