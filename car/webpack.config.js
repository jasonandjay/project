const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// 引入vue-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 删除构建目录
let cleanWebpack = process.env.NODE_ENV?new CleanWebpackPlugin(['build/assets/']):()=>{};
//配置插件
const plugins = [
    // 开启热更新
    new webpack.HotModuleReplacementPlugin(),
    // 引入vue插件
    new VueLoaderPlugin(),
    // 从页面中抽离css
    new MiniCssExtractPlugin({
        filename: '[name].[hash:6].css'
    }),
    cleanWebpack,
    //处理html，并自动引用output的文件
    new HtmlWebpackPlugin({
        //目标文件
        filename: '../index.html',
        //模版文件
        template: './src/index.html',
        //对文件进行压缩
        minify: {
            //压缩代码
            minimize: true,
            //移除注释
            removeComments: true,
            //去掉空格
            collapseWhitespace: true,
            //压缩行内css
            minifyCSS: true,
            //压缩行内js
            minifyJS: false
        }
    })
];

module.exports = {
    //构建模式，development or production
    mode: process.env.NODE_ENV || 'development',
    //输入配置
    entry: {
        index: './src/js/index.js',
        // vendors: ['jquery']
    },
    //输出配置
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'build/assets/'),
        publicPath: 'assets/'
    },
    //是否生成source map以及如何生成
    devtool: process.env.NODE_ENV==='production'?'none':'eval-source-map',
    // devtool: 'none',
    devServer: {
        //serve加载的目录
        contentBase: './build', 
        port: 9000,
        //打开浏览器
        open: true,
        watchContentBase: true,
        setup: function(app){
            app.get('/getData', (req, res)=>{
                let data = require('./src/json/data.js');
                res.json(data);
            })
        },
        //启用gzip压缩文件
        compress: true,
        //强制页面访问index.html
        historyApiFallback: true,
        //实时刷新
        inline: true,
        //支持模块热更新
        hot: true
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    //模块操作
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,  //正则判断文件类型
                exclude: /node_modules/,    //排除这个文件夹不处理
                use: ['babel-loader']     //使用加载器  
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:6].[ext]',
                        limit: 1024
                    }
                }]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins,
    optimization: {
        splitChunks: {
           chunks: 'all'
        }
    }
};