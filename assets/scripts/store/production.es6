import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { NoteApp } from '../reducers'
import startState from '../schema'
import { navigate } from '../actions'

const store = createStore(NoteApp, startState, applyMiddleware(thunk))

browserHistory.listen(location => store.dispatch(navigate(location)))

export default store
