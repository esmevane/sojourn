require('application.sass')

import React from 'react'

// In order to furnish the hot loader with the logic it needs to swap out
// components when their presentation or logic changes, you need to use this
// class syntax to extend React.Component.  Simple functions that return JSX
// don't trigger hot-swapping.
//
export default class App extends React.Component {
  render() { return <p>React loaded</p> }
}
