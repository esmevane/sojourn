import React from 'react'
import { Splash, Menu } from '../components'

const Welcome = () => (
  <Splash>
    <Menu />
    <section className='welcome'>
      <h1>Get started by checking out the demo, or the styleguide.</h1>
    </section>
  </Splash>
)

export default Welcome
