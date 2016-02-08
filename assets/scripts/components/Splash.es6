import React from 'react'

export default class Splash extends React.Component {
  render() {
    return(
      <div>
        <header className='intro-splash'>
          <h1 className='headline'>Sojourn</h1>
          <h2 className='byline'>
            A prepackaged rapid development environment
          </h2>
        </header>
        <main>
          { this.props.children }
        </main>
        <footer>
          <p>
            Curated by <a href='mailto:esmevane@gmail.com'>Joseph McCormick</a>
          </p>
        </footer>
      </div>
    )
  }
}
