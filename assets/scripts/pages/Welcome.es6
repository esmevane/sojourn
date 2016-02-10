import React from 'react'
import { Link } from 'react-router'
import { Splash } from '../components'

const Welcome = () => (
  <Splash>
    <section className='welcome'>
      <h1>
        Get started by checking out <Link to='notepad'>the notepad demo</Link>
        , <Link to='styleguide'>the styleguide examples</Link>
        , <Link to='d3-demo'>the D3 integration demo</Link>
        , or <a href='http://esmevane.github.io/sojourn'>the manual</a>.
      </h1>
    </section>
  </Splash>
)

export default Welcome
