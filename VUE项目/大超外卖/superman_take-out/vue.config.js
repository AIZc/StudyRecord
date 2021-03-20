
//页面适配
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
module.exports = {
    runtimeCompiler:true,
    lintOnSave:false,  //关闭eslint的规则
    productionSourceMap: false,  // 不生成 source map文件
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'',
                }
            },
        }
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}