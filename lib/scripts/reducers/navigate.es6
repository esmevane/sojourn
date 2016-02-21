import { Navigate } from '../actions'
import { InitialState } from '../schema'
import { combineReducers } from 'redux'

function route(state = InitialState.navigate.route, action) {
  let { type, route } = action

  return type === Navigate ? route : state
}

const navigate = combineReducers({ route })

export default navigate
