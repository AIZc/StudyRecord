<template>
    <div class="w-full h-300 flex j-center a-center absolute main-position left-0">
        <div v-show="!ifSuccess" class="absolute top-0 flex j-center a-center flex-column">
            <div ref="bod" class="w-100 h-100 bg-main-grey b-round box-shadow-grey flex j-center a-center">
                <Upload action="" accept="image/*" :format="['jpg','jpeg','png']" :before-upload="uploadBefore">
                    <div class="w-60 h-60 bg-grey b-round box-shadow-grey flex j-center a-center">
                        <Icon type="md-images" class="fs-30 bg-main-yellow"/>
                    </div>
                </Upload>
            </div>
            <div class="m-t-50">
                <Divider>请拍照或本地上传西瓜图片</Divider>
            </div>
        </div>
        <Loading v-show="ifSuccess"></Loading>
    </div>
</template>

<script>
import Loading from './Loading'
export default {
    components: {
        Loading
    },
    data() {
        return {
            ifSuccess: false
        }
    },
    methods: {
        changeStatus(curStatus) {
            this.ifSuccess = curStatus
        },
        uploadBefore(file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                const _base64 = reader.result
                // 继续上传
                this.ifSuccess = !this.ifSuccess
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
            }
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
.main-position {
    top: 20%;
}
</style>