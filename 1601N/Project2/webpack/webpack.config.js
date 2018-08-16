const path = require('path');
const vueLoader = require('vue-loader/lib/plugin');

const plugins = [
    new vueLoader()
]

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js|\.jsx$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            options: {
                presets: ['react', 'stage-0']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
          }]
    },
    resolve:{
        extensions: ['*', '.js', '.jsx', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        before(app){
            app.get('/index/aaaa', (req, res)=>{
                console.log(req.query);
                res.end('Hello World');
            })
        }
    },
    // plugins,
    devtool: '#eval-source-map',
}