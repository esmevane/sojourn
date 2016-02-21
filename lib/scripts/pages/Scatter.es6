import React from 'react'
import { Scatter } from '../components'

const ScatterDemo = () => (
  <div className='d3-chart-container'>
    <section>
      <Scatter height={160} width={"100%"} />
      <Scatter height={160} width={"100%"} />
      <Scatter height={160} width={"100%"} />
    </section>
  </div>
)

export default ScatterDemo
