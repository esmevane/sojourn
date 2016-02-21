import Immutable from 'immutable'
import { combineReducers } from 'redux'
import { UpdateChart } from '../actions'
import * as Schema from '../schema'

function add(state = Schema.InitialState.chart.targets, action) {
  let targets = Immutable.fromJS(state)
  let newTarget = Schema.composeTarget(action.element)

  return targets.push(newTarget).toJS()
}

function scatter(state = Schema.InitialState.chart.scatter, action) {
  switch (action.type) {
    case UpdateChart:
      return Schema.randomizedScatter()
    default:
      return state
  }
}

function delay(state = Schema.InitialState.chart.delay, action) {
  return state
}

function targets(state = Schema.InitialState.chart.targets, action) {
  switch (action.type) {
    default:
      return state
  }
}

const chart = combineReducers({ delay, scatter, targets })

export default chart
