// These are operations: They are method calls and arguments for D3
//
export const all = (selector) => ({ operation: 'selectAll', input: [selector] })
export const append = (tagName) => ({ operation: 'append', input: [tagName] })
export const attributes = (object) => ({ operation: 'attr', input: [object] })
export const data = (data, fn) => ({ operation: 'data', input: [data, fn] })
export const domain = (domain) => ({ operation: 'domain', input: [domain] })
export const duration = (over) => ({ operation: 'duration', input: [over] })
export const enter = () => ({ operation: 'enter', input: [] })
export const exit = () => ({ operation: 'exit', input: [] })
export const linear = () => ({ operation: 'linear', input: [] })
export const range = (range) => ({ operation: 'range', input: [range] })
export const remove = () => ({ operation: 'remove', input: [] })
export const scale = () => ({ operation: 'scale' })
export const select = (element) => ({ operation: 'select', input: [element] })
export const transition = () => ({ operation: 'transition', input: [] })

export const interpolateHcl = () => ({ operation: 'interpolateHcl' })
export const interpolate = (pattern) => (
  { operation: 'interpolate', input: [pattern] }
)
