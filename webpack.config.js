var path    = require('path');
var webpack = require('webpack');
var meta    = { port: 9002 };

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
    new webpack.NoErrorsPlugin()
  ],
  output: {
    path:       path.join(__dirname, 'app', 'scripts'),
    filename:   'application.js',
    publicPath: 'http://localhost:' + meta.port + '/scripts/'
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
