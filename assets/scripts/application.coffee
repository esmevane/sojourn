# $       = require 'jquery'
React   = require 'react'
_       = require 'underscore'
body    = _.first document.getElementsByTagName('body')

content =
  <header className='intro-splash'>
    <h1 className='headline'>Sojourn</h1>
    <h2 className='byline'>Highly disposable front-end boilerplate</h2>
    <h2 className='byline'>Script with React + Browserify + CoffeeScript</h2>
    <h2 className='byline'>Visualize with Bourbon + Sass + Font Awesome</h2>
    <h2 className='byline'>Keep everything tested with Mocha + Expect</h2>
  </header>

React.render content, body
