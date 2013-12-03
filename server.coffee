express = require 'express'

app = express()
app.use '/scripts', express.static "app/scripts"
app.use '/styles', express.static "app/styles"
app.get "*", (request, response, next) ->
  response.sendfile "app/index.html"

module.exports = app