// const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'index',
        libraryTarget: 'window'
    },
    devtool: "source-map"
    // resolve: {
    //     alias: {
    //     '@': path.resolve(__dirname, '_src')
    //     }
    // },
}
