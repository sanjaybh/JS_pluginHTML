const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'widget_yajnas.js'
    },
    devServer: {
        contentBase: './dist'
    }
};