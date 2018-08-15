var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const plugins = [
    new VueLoaderPlugin(),
    // 从页面中抽离css
    new MiniCssExtractPlugin({
        filename: '[name].[hash:6].css'
    })
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.(js|jsx)$/,  //正则判断文件类型
            exclude: /node_modules/,    //排除这个文件夹不处理
            use: [{
                loader: 'babel-loader',  //使用加载器 
                options: {
                    presets: ['react', 'env']
                }
            }]     
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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    open: true,
    hot: true,
    before: (app)=>{
      app.get('/index/data', (req, res)=>{
        let json = require('./src/json/index.json');
        res.json(json);
      })
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}