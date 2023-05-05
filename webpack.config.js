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
    // plugins: [
    //     [
    //         "add-module-exports",
    //         {
    //         "addDefaultProperty": true
    //         }
    //     ]
    // ],
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map"
}
