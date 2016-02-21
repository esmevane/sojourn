import { UpdateChart } from '../actions'
import { combineReducers } from 'redux'
import * as Schema from '../schema'

function scatter(state = Schema.InitialState.chart.scatter, action) {
  switch (action.type) {
    case UpdateChart:
      return Schema.randomizedScatter()
    default:
      return state
  }
}

function defaults(state = Schema.InitialState.chart.defaults, action) {
  return state
}

function delay(state = Schema.InitialState.chart.delay, action) {
  return state
}

const chart = combineReducers({ delay, defaults, scatter })

export default chart
