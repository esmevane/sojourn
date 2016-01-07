express = require 'express'
app     = express()

routeToFile = ({ app, route, file }) ->
  app.get route, (request, response, next) ->
    response.sendFile "#{__dirname}/#{file}"

app.use '/images', express.static "app/images"
app.use '/scripts', express.static "app/scripts"
app.use '/styles', express.static "app/styles"

routeToFile app: app, route: '/example', file: 'app/example.html'
routeToFile app: app, route: '*',        file: 'app/index.html'

module.exports = app
