var path              = require('path');
var autoprefixer      = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack           = require('webpack');
var meta              = { port: 9002 };

var styles       = path.resolve(__dirname, './assets', 'styles');
var bourbonNeat  = require('node-neat').includePaths;
var stylePaths   = [styles].concat(bourbonNeat);
var styleQueries = [];

stylePaths.forEach(function(stylePath) {
  styleQueries.push("includePaths[]=" + stylePath)
});

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&' + styleQueries.join("&")
];

var extractLoader = ExtractTextPlugin.extract(
  'style-loader',
  sassLoaders.join('!')
);

module.exports = {
  meta:     meta,
  devtool:  'eval',
  stats:    { colors: true, modules: true, reasons: true },
  progress: true,
  entry:    [ path.join(__dirname, 'assets', 'scripts', 'index.es6') ],
  plugins:  [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false, mangle: true }),
    new ExtractTextPlugin('application.css')
  ],
  resolve: {
    extensions: ['', '.js', '.es6', '.sass', '.scss'],
    modulesDirectories: ['assets/scripts', 'assets/styles', 'node_modules']
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  output: {
    path:     path.join(__dirname, 'app', 'assets'),
    filename: 'application.min.js',
  },
  module: {
    loaders: [
      {
        test:    /\.es6$/,
        include: [ path.join(__dirname, 'assets', 'scripts') ],
        loaders: [ 'react-hot', 'babel-loader' ],
      },
      { test: /\.(scss|sass)$/, loader: extractLoader }
    ]
  }
};
