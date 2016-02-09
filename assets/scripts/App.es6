require('application.sass')

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Demo, Welcome, Styleguide, NotFound } from './components'

// In order to furnish the hot loader with the logic it needs to swap out
// components when their presentation or logic changes, you need to use this
// class syntax to extend React.Component.  Simple functions that return JSX
// don't trigger hot-swapping.
//
export default class App extends React.Component {
  render() {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ Welcome } />
        <Route path='/demo' component={ Demo } />
        <Route path='/styleguide' component={ Styleguide } />
        <Route path="*" component={ NotFound } />
      </Router>
    )
  }
}
