const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import WebpackMd5Hash from 'webpack-md5-hash';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
};

process.env.NODE_ENV = 'production';


module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  entry: [
    'babel-polyfill',
    './src/serverRenderMiddleware',
  ],
  target: 'node', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: `/`,
    filename: 'serverRenderMiddleware.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    // new WebpackMd5Hash(),
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      disable: false,
      allChunks: true,
    }),
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0']

    },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"

      },
      {
        test: /\.css$/,
        loader: "css-loader"

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
  performance: {
    hints: 'warning',
  },
  stats: 'minimal',
};
