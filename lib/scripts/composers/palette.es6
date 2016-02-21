import {
  build, domain, interpolate, interpolateHcl, linear, range, scale
} from '../composers'

export function* hcl() { yield interpolateHcl() }

export function* hclPalette(options) {
  yield scale()
  yield linear()
  yield domain(options.domain)
  yield interpolate(build(hcl()))
}
