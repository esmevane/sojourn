import d3 from 'd3'

// The build function maps a list of composer instructions to D3 and emulates
// the building of an object.  This lets you use a generator to declare what a
// D3 object *is*, instead of being forced to conform to a chainable API and
// conceding to caching that object in state somehow.
//
// If an operation has no input value, the builder passes the operation as
// though it were a plain property.
//
// If the operation has input length, then the builder calls the object with
// input as an argument.
//
// This function steps outside of the concept of testability.  It couples
// explicitly to D3, and as a consequence to that, can't be tested short of
// standing up an entire DOM environment.
//
// To test properly, you should just build a composer and test that they
// return the correct operations.
//
export function buildStep(builder, { operation, input }) {
  let method = Reflect.get(builder, operation)
  if (typeof input === 'undefined') {
    return method
  } else if (input.length) {
    return Reflect.apply(method, builder, input)
  } else {
    return Reflect.apply(method, builder)
  }
}

export function build(composer, starter = d3) {
  let instructions = [...composer]
  return instructions.reduce(buildStep, starter)
}
