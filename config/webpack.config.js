const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  //devtool: 'source-map',
  output: {
    path: './build',
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
  },
  entry: {
    'main': './src/main.ts'
  },
  ts: {
    configFileName: './config/tsconf.json'
  },
  tslint: {
    configuration: require('../tslint.json')
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css', '.scss', '.json'],
    root: './src',
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'raw-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'raw-loader', 'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [
          './src/index.html'
        ]
      }
    ]
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './build/assets'
    }]),
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), './build'),
    filename: '[name]-[hash].js'
  },
};
