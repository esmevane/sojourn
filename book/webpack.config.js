var path         = require('path');
var autoprefixer = require('autoprefixer');
var webpack      = require('webpack');
var meta         = { port: 9002 };
var styles       = path.resolve(__dirname, './assets', 'styles');
var bourbonNeat  = require('node-neat').includePaths;
var stylePaths   = [styles].concat(bourbonNeat);
var styleQueries = [];

stylePaths.forEach(function(stylePath) {
  styleQueries.push("includePaths[]=" + stylePath)
});

var styleLoader = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&' + styleQueries.join("&")
].join("!");

module.exports = {
  meta:     meta,
  devtool:  'eval',
  stats:    { colors: true, modules: true, reasons: true },
  progress: true,
  entry: [
    'webpack-dev-server/client?http://localhost:' + meta.port,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'assets', 'scripts', 'index.es6')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.es6', '.sass', '.scss'],
    modulesDirectories: ['assets/scripts', 'assets/styles', 'node_modules']
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  output: {
    path:       path.join(__dirname, 'app', 'assets'),
    filename:   'application.js',
    publicPath: 'http://localhost:' + meta.port + '/assets/'
  },
  module: {
    loaders: [
      {
        test:    /\.es6$/,
        include: [ path.join(__dirname, 'assets', 'scripts') ],
        loaders: [ 'react-hot', 'babel-loader' ],
      },
      { test: /\.(scss|sass)$/, loader: styleLoader }
    ]
  }
};
