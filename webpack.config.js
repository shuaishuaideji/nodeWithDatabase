var path = require('path');
var webpack = require('webpack');


var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './view/RouterIndex.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/view/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

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
            {test: /\.json$/, loader: 'json'},
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url?limit=10000&name=images/[hash:8].[name].[ext]'
            }]
    },
    node: {
        fs: "empty"
    }
}
