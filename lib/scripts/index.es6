import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import App from './App.es6'
import store from './store'

// This is the entrypoint for all of the application building logic declared in
// the webpack layer.  This file should be responsible for nothing more than
// fetching the components and separate pieces, and linking them up to the user
// interface.
//
// It's notable to understand that changes made in this file will persist to
// the build and the browser, but won't cause a hot reload.  You'll need to do
// a manual refresh (though the work will be done almost instantly).  Normal
// React components imported by this file will load as expected.
//
let element = document.getElementById('demo')
let content = (
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ Routes } />
  </Provider>
)

render(content, element)
