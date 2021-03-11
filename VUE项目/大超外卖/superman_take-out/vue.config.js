
//页面适配
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 750   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
module.exports = {
    runtimeCompiler:true,
    lintOnSave:false,  //关闭eslint的规则
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
}