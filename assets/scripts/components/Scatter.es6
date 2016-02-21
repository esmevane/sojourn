import React from 'react'
import { connect } from 'react-redux'
import { build } from '../composers'
import { boundary } from '../composers/calculations'
import { canvas } from '../composers/canvas'
import { appear, animate, leave } from '../composers/circles'

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

class Scatter extends React.Component {
  componentDidMount() {
    this.chart = new Canvas(this.refs.container)
    this.chart.create(this.props)
  }
  componentWillUpdate() { this.chart.update(this.props) }
  componentWillUnmount() { this.chart.destroy(this.props) }
  render() { return <section ref='container' /> }
}

function mapStateToProps(state) { return state.chart.scatter }

export default connect(mapStateToProps)(Scatter)
