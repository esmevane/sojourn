import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

import thunk         from 'redux-thunk'
import { DevTools }  from '../containers'
import { EditorApp } from '../reducers'
import startState    from '../schema'

const enhancer = compose(applyMiddleware(thunk), DevTools.instrument())
let store      = createStore(EditorApp, startState, enhancer)

export default store
