import { combineReducers } from 'redux'
import notes from './notes'
import navigate from './navigate'

let reducers = { notes, navigate }

export const NoteApp = combineReducers(reducers)
