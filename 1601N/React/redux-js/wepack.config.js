module.exports = {
    entry: 'src/index.js',
    output: {
        filename: 'bundle.js'
    },
    moudle: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    }
}