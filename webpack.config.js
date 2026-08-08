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
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                // Bootstrap's own SCSS still uses Sass features (global
                                // color functions, legacy @import, if()) that Dart Sass
                                // now warns about. We don't control that code, so silence
                                // deprecations from dependencies while still surfacing any
                                // from our own src/bundle.scss.
                                // https://sass-lang.com/documentation/js-api/interfaces/options/#quietDeps
                                quietDeps: true,
                                // bundle.scss itself still uses @import to pull in Bootstrap
                                // partials one-by-one (needed so $body-color/$enable-dark-mode
                                // overrides land between imports, per Bootstrap's own 5.3 Sass
                                // customization docs). Bootstrap hasn't migrated its partials to
                                // @use yet, so there's no forward-compatible replacement to move
                                // to today; revisit once Bootstrap's own scss does.
                                // https://sass-lang.com/documentation/js-api/interfaces/options/#silenceDeprecations
                                silenceDeprecations: ['import']
                            }
                        }
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
