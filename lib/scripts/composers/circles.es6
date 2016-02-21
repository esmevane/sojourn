import {
  all,
  append,
  attributes,
  data,
  duration,
  enter,
  exit,
  remove,
  transition
} from '../composers'

export function* appear({ name, fill, radius, describe, parser }) {
  yield all(`.${name}`)
  yield data(describe, parser)
  yield enter()
  yield append('circle')
  yield attributes({ class: name, fill, r: radius })
}

export function* animate(options) {
  let { name, describe, parser, over, changes } = options

  yield all(`.${name}`)
  yield data(describe, parser)
  yield transition()
  yield duration(over)
  yield attributes(changes)
}

export function* leave({ name, describe, parser }) {
  yield all(`.${name}`)
  yield data(describe, parser)
  yield exit()
  yield remove()
}
