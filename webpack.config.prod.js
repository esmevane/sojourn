var path    = require('path');
var webpack = require('webpack');
var meta    = { port: 9002 };

module.exports = {
  meta:     meta,
  devtool:  'eval',
  stats:    { colors: true, modules: true, reasons: true },
  progress: true,
  entry:    [ path.join(__dirname, 'assets', 'scripts', 'index.es6') ],
  plugins:  [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false, mangle: true })
  ],
  output: {
    path:     path.join(__dirname, 'app', 'scripts'),
    filename: 'application.min.js',
  },
  module: {
    loaders: [
      {
        test:    /\.es6$/,
        include: [ path.join(__dirname, 'assets', 'scripts') ],
        loaders: [ 'react-hot', 'babel-loader' ],
      }
    ]
  }
};
