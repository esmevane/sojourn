import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { Demo, Styleguide, NotFound, Welcome, Scatter } from './pages'
import App from './App.es6'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Welcome } />
    <Route path='notepad' component={ Demo } />
    <Route path='styleguide' component={ Styleguide } />
    <Route path='d3-demo' component={ Scatter } />
    <Route path="*" component={ NotFound } />
  </Route>
)
