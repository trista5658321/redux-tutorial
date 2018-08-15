const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV;
const sourceMap = process.env.SOURCE_MAP;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.[hash].js'
    },
    devtool: (env === 'production') ? false : (sourceMap ? 'source-map' : 'eval'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:'css-loader',
                            options: {
                              sourceMap: !(env === 'production'),
                            }
                        },
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // 這邊設定bundle CSS後的檔名
        new ExtractTextPlugin("styles.css")
    ]
}