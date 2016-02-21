import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import { browserHistory } from 'react-router'
import { NoteApp } from '../reducers'
import startState from '../schema'
import { navigate } from '../actions'

const middleware = applyMiddleware(createSagaMiddleware(sagas))
const store = createStore(NoteApp, startState, middleware)

browserHistory.listen(location => store.dispatch(navigate(location)))

export default store
