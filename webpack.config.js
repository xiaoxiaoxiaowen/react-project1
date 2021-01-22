const HtmlWebpackPlugin = require('html-webpack-plugin') //导入插件
const path = require('path')
module.exports = {
    mode: "development", //production(生产环境)  development(开发环境) 
    plugins: [
        new HtmlWebpackPlugin({ //创建一个在内存中生成html页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面
            //将来会根据此页面生成内存中的页面
            filename: 'index.html' //指定生成页面的名称，index.html浏览器才会默认直接打开
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]-[local]-[hash:5]"
                            }
                        }
                    },
                    { loader: 'less-loader' }
                ]
            },
            { //字体
                test: /.ttf|woff|woff2|eot|svg$/, //匹配规则
                use: 'url-loader' //指定解析器 ,注意 内部会依赖 file-loader
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                    loader: 'babel-loader',
                    },
                    {
                    loader: '@svgr/webpack',
                    options: {
                        babel: false,
                        icon: true,
                    },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'], //表示import引入时，这几个文件的后缀，可以省略不写
        alias: {
            '@': path.join(__dirname, './src') //配置@ 符号， import引入使用
        }
    }
}