require('application.sass')

import React from 'react'
import { Header, Footer, PageChange } from './components'

// In order to furnish the hot loader with the logic it needs to swap out
// components when their presentation or logic changes, you need to use this
// class syntax to extend React.Component.  Simple functions that return JSX
// don't trigger hot-swapping.
//
export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <PageChange location={ this.props.location }>
            { this.props.children }
          </PageChange>
        </main>
        <Footer />
      </div>
    )
  }
}
