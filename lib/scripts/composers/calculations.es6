import { domain, linear, range, scale } from '../composers'

export function* boundary(options) {
  yield scale()
  yield linear()
  yield range(options.range)
  yield domain(options.domain)
}
