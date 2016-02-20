"use strict";

var Environment = process.env.NODE_ENV;
var messages = [];

// JSON-Server assets for a faux development API / DB
//
var JsonServer = require('json-server');
var JsonDB     = require('./db');

// The main Express server, which will proxy /scripts/ to Webpack.
//
// Gather dependencies:
//
var express = require('express');
var proxy   = require('proxy-middleware');
var url     = require('url');
var app     = express();
var config  = require('./webpack.config');

// Declare paths:
//
var basePort = config.meta.port - 1;
var appHost  = `http://localhost:${basePort}`
var scripts  = `http://localhost:${config.meta.port}/assets`;
var assetUri = `${appHost}/assets`;
var apiHost  = `${appHost}/api`;

messages.push(`Primary URL: ${appHost}`)

if (Environment === 'production') {
  messages.push(`Serving static assets in production mode.`)

  app.use('/assets', express.static('app/assets'));
} else {
  messages.push(`Starting asset hotloader on ${scripts}`)
  messages.push(`Proxying asset hotloader to ${assetUri}`)

  app.use('/assets', proxy(url.parse(scripts)));
}

app.use('/images', express.static("app/images"));
app.use('/api', JsonServer.router(JsonDB.ApiDb));

app.get('/favicon.ico', function(request, response) {
  var path = [__dirname, 'app', 'images', 'favicon.ico'].join("/");

  response.sendFile(path);
});

app.get('*', function(request, response, next) {
  var path = [__dirname, 'app', 'index.html'].join("/");

  response.sendFile(path);
})

app.listen(basePort);

// Webpack Development Server:  Build and manage script assets.
//
if (Environment !== 'production') {
  var path      = require('path');
  var webpack   = require('webpack');
  var DevServer = require('webpack-dev-server');

  var devServerOptions = {
    contentBase:        path.resolve('./app/'),
    publicPath:         config.output.publicPath,
    hot:                true,
    cached:             false,
    cachedAssets:       false,
    historyApiFallback: true,
    stats:              { colors: true, chunkModules: false }
  };

  var devServer = new DevServer(webpack(config), devServerOptions);

  devServer.listen(config.meta.port, 'localhost', function() {});
}

// Deliver console introduction.
//
messages.forEach(function(message) { console.log(message) });
