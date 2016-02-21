import { combineReducers } from 'redux'
import chart from './chart'
import notes from './notes'
import navigate from './navigate'

let reducers = { chart, notes, navigate }

export const NoteApp = combineReducers(reducers)
