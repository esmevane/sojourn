import React from 'react'
import { sample } from 'underscore'
import { connect } from 'react-redux'

import { build } from '../composers'
import { boundary } from '../composers/calculations'
import { canvas } from '../composers/canvas'
import { hclPalette } from '../composers/palette'
import * as Circles from '../composers/circles'

function fill({ id }) {
  let startColors = [ "#8999AA", "#404852" ]
  let endColors   = [ "#BBBA9E", "#A0A8D3" ]
  var modulation  = (new Date).getTime() % 2.5
  var randomized  = id * modulation
  var palette     = build(hclPalette({ domain: [1, 20] }))
  var start       = palette.range(startColors)
  var final       = palette.range(endColors)
  var spectrum    = palette.range([ start(randomized), final(randomized) ])

  return spectrum((randomized))
}

function mapBoundaries({ domain, height, width }) {
  let x = build(boundary({ range: [0, width], domain: domain.x }))
  let y = build(boundary({ range: [0, height], domain: domain.y }))
  let z = build(boundary({ range: [5, 20], domain: [1, 10] }))

  return { x, y, z }
}

class Scatter extends React.Component {
  componentDidMount() {
    this.chart = build(canvas({ element: this.refs.group }))
    let composer = Circles.appear({
      describe: this.props.data,
      fill:     fill,
      name:     'dot',
      parser:   ({ id }) => id,
      radius:   0
    })

    build(composer, this.chart)
  }

  componentWillUpdate() {
    let { domain, data } = this.props
    let rect = this.refs.group.parentNode.getBoundingClientRect()
    let { height, width } = rect
    let boundaries = mapBoundaries({ domain, height, width })

    let cx = dimension => boundaries.x(dimension.x)
    let cy = dimension => boundaries.y(dimension.y)
    let r  = dimension => boundaries.z(dimension.z)

    let composer = Circles.animate({
      name:     'dot',
      describe: data,
      parser:   ({ id }) => id,
      over:     3000,
      changes:  { cx, cy, fill, r }
    })

    build(composer, this.chart)
  }

  componentWillUnmount() {
    let composer = Circles.leave({
      describe: this.props.data,
      name: 'dot',
      parser: ({id}) => id
    })

    build(composer, this.chart)
  }

  render() {
    let styles = { height: this.props.height, width: this.props.width }
    return(<svg style={ styles }><g ref='group' /></svg>)
  }
}

function mapStateToProps(state) {
  return state.chart.scatter
}

export default connect(mapStateToProps)(Scatter)
