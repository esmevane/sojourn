import React from 'react'

const Splash = ({ children }) => (
  <div>
    <div className='intro-splash'>
      <h1 className='headline'>Sojourn</h1>
      <h2 className='byline'>
        A prepackaged rapid development environment
      </h2>
    </div>
    { children }
  </div>
)

export default Splash
