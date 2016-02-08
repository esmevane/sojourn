import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

import thunk         from 'redux-thunk'
import { DevTools }  from '../containers'
import { EditorApp } from '../reducers'
import startState    from '../schema'

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

const enhancer = compose(applyMiddleware(thunk), instrument)
const store    = createStore(EditorApp, startState, enhancer)

export default store
