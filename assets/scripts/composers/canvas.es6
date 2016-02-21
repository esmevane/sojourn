import { append, attributes, select } from '../composers'

export function* canvas({ element, height, width }) {
  yield select(element)
}
