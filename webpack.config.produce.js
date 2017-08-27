var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './view/RouterIndex.js');
var BUILD_PATH = path.resolve(__dirname, './build');
process.env.NODE_ENV = 'production'
module.exports = {
    entry: [
        './src/view/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // webapck 会给编译好的代码片段一个id用来区分
        // 而这个插件会让webpack在id分配上优化并保持一致性。
        // 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块

        new webpack.optimize.UglifyJsPlugin({
            // 压缩代码
            compressor: {
                warnings: false
            }
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0']

        },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"

            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"

            },
            {test: /\.swf$/, loader: "file?name=[path][name].[ext]"},

            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                loader: 'url?limit=10000'
            },
            {test: /\.json$/, loader: 'json-loader'},
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url?limit=10000&name=images/[hash:8].[name].[ext]'
            }]
    },
}
