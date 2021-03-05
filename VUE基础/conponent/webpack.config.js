const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {  //配置对象
    //入口
    entry: {
        xxx: path.resolve(__dirname, 'src/index.js')
    },

    //出口
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //模块加载器
    module: {
        rules: [
            // 处理es6转se5
            {
                test:/\.js$/,
                // exclude:/node_modules/,    //不处理哪些
                include:[path.resolve(__dirname,'src')],  //只针对哪些处理
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'] //预设包:包含多个常用插件包的一个大包
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
            },
            //处理图片
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
                }
            }
        ]
    },

    //插件

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',   //将哪个页面作为模板页面处理
            filename: 'index.html'   //生成页面(在output制定的path下)
        })
    ],
    devServer: {
        open: true,
        quiet:true
    },
    //开启source map调试
    devtool: 'inline-source-map'
}
