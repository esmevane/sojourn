import React, { PropTypes } from 'react'
import { build } from '../composers'
import { boundary } from '../composers/calculations'
import { canvas } from '../composers/canvas'
import { appear, animate, leave } from '../composers/circles'
import { EventEmitter }  from 'events'
import { range, sample } from 'underscore'

var ScatterData = {
  defaults: { domain: { low: -5, high: 25 }, dots: 100, seed: 20 },
  delay: 2500
}

if (global) global.ScatterData = ScatterData

class ScatterStore extends EventEmitter {
  getState()          { return this.randomData() }
  hasChanged()        { this.emit('chart:data:change') }
  onChange(callback)  { this.on('chart:data:change', callback) }
  offChange(callback) { this.removeListener('chart:data:change', callback) }

  start() {
    this.interval = setInterval(() => this.hasChanged(), ScatterData.delay)
  }

  randomData() {
    let { domain: { low, high }, dots, seed } = ScatterData.defaults

    let data   = []
    let domain = { x: [low, high], y: [low, high], z: [low, high] }
    let points = range(1, dots)
    let seeds  = range(1, seed)

    for (let point of points) {
      let [ id, x, y, z ] = sample(seeds, 4)

      data.push({ id, x, y, z })
    }

    return { domain, data }
  }
}

class Canvas {
  constructor(element) {
    let height    = element.parentNode.offsetHeight
    let width     = element.parentNode.offsetWidth
    let container = build(canvas({ element, height, width }))

    this.element   = element
    this.defaults  = { height, width }
    this.container = container
    this.duration  = 3000
    this.fill      = 'rgba(0, 255, 0, 0.1)'
  }

  boundaries({ domain }) {
    let { height, width } = this.defaults

    let x = build(boundary({ range: [0, width], domain: domain.x }))
    let y = build(boundary({ range: [0, height], domain: domain.y }))
    let z = build(boundary({ range: [5, 20 ], domain: [1, 10] }))

    return { x, y, z }
  }

  create({ data }) {
    let composer = appear({
      describe: data,
      fill:     this.fill,
      name:     'dot',
      parser:   ({ id }) => id,
      radius:   0
    })

    build(composer, this.container)
  }

  destroy({ data }) {
    let composer = leave({ describe: data, name: 'dot', parser: ({id}) => id })
    build(composer, this.container)
  }

  update({ domain, data }) {
    let boundaries = this.boundaries({ domain })
    let cx   = dimension => boundaries.x(dimension.x)
    let cy   = dimension => boundaries.y(dimension.y)
    let r    = dimension => boundaries.z(dimension.z)
    let fill = this.fill

    let composer = animate({
      name:     'dot',
      describe: data,
      parser:   ({ id }) => id,
      over:     3000,
      changes:  { cx, cy, fill, r }
    })

    build(composer, this.container)
  }
}

export default class Scatter extends React.Component {
  handleChange = () => {
    let newState = this.store.getState()
    this.setState(newState)
  };

  constructor(properties) {
    super(properties)
    this.store = new ScatterStore
    this.state = this.store.getState()
    this.store.start()
  }

  componentWillMount() { this.store.onChange(this.handleChange) }
  componentWillUpdate() { this.chart.update(this.state) }
  render() { return <section ref='container' /> }

  componentDidMount() {
    this.chart = new Canvas(this.refs.container)
    this.chart.create(this.state)
  }

  componentWillUnmount() {
    this.store.offChange(this.handleChange)
    this.chart.destroy(this.state)
  }
}

Scatter.propTypes = { domain: PropTypes.object, data: PropTypes.array }
