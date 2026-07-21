'use strict'

// const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, {
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                            }
                        }
                        }
                    }, {
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }
                ]
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
