import { createStore } from 'redux'
import { EditorApp }   from '../reducers'
import startState      from '../schema'

let store = createStore(EditorApp, startState)

export default store
