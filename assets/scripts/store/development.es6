import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import { browserHistory } from 'react-router'
import { DevTools } from '../containers'
import { NoteApp } from '../reducers'
import startState from '../schema'
import { navigate } from '../actions'

let instrument
let windowPresent   = typeof window === 'object'
let devToolsPresent = false

if (windowPresent) {
  devToolsPresent = typeof window.devToolsExtension !== 'undefined'
}

if (windowPresent && devToolsPresent) {
  instrument = window.devToolsExtension()
} else {
  instrument = DevTools.instrument()
}

const middleware = applyMiddleware(createSagaMiddleware(sagas))
const enhancer   = compose(middleware, instrument)
const store      = createStore(NoteApp, startState, enhancer)

browserHistory.listen(location => store.dispatch(navigate(location)))

export default store
