import { fork, call, put, take } from 'redux-saga'
import * as Actions from '../actions'

const timeout = (ms = 300) => {
  return new Promise((resolve) => { setTimeout(resolve, ms) })
}

function* updateChart(getState) {
  while(true) {
    let { chart } = getState()
    yield call(timeout, chart.delay)
    yield put(Actions.updateChart())
  }
}

export default function* root(getState) {
  yield fork(updateChart, getState)
}
