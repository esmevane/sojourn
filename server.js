"use strict";

// JSON-Server assets for a faux development API / DB
//
var JsonServer = require('json-server');
var JsonDB     = require('./db');

// The main Express server, which will proxy /scripts/ to Webpack.
var express = require('express');
var proxy   = require('proxy-middleware');
var url     = require('url');
var app     = express();
var config  = require('./webpack.config');
var port    = config.meta.port - 1;
var scripts = "http://localhost:" + config.meta.port + "/assets";

app.use('/images', express.static("app/images"));
app.use('/static', express.static("app/static"));
app.use('/api', JsonServer.router(JsonDB.ApiDb));

app.use('/assets', proxy(url.parse(scripts)));

app.get('/favicon.ico', function(request, response) {
  var path = [__dirname, 'app', 'images', 'favicon.ico'].join("/");

  response.sendFile(path);
});

app.get('/:file', function(request, response, next) {
  var htmlFile = "" + request.params.file + ".html";
  var path     = [__dirname, 'app', htmlFile].join("/");

  response.sendFile(path);
});

app.get('*', function(request, response, next) {
  var path = [__dirname, 'app', 'index.html'].join("/");

  response.sendFile(path);
})

app.listen(port);

// Webpack Development Server:  Build and manage script assets.
//
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

// Some sanity check output.
//
var messages = [
  "Primary app listening on " + port,
  "Webpack asset service listening on " + config.meta.port,
  "Proxy established on url: " + scripts,
  "\n"
]

messages.forEach(function(message) { console.log(message) });
