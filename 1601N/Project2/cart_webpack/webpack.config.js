var path = require('path')
var webpack = require('webpack')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

const plugins = [
    // 从页面中抽离css
    new MiniCssExtractPlugin({
        filename: 'index.css'
    })
]
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
            process.env.NODE_ENV=='production'?MiniCssExtractPlugin.loader:'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
            MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['react', 'stage-0']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.jsx', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    // noInfo: true,
    overlay: true,
    before: (app)=>{
      app.get('/index/data', (req, res)=>{
        let json = require('./src/json/index.json');
        res.json(json);
      })
    }
  },
  devtool: '#eval-source-map',
  plugins
}