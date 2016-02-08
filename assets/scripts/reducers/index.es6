import Immutable    from 'immutable'
import * as Actions from '../actions'
import * as Schema  from '../schema'
import * as Redux   from 'redux'
import notes        from './notes'

let reducers = { notes }

export const EditorApp = Redux.combineReducers(reducers)
