require('application.sass')

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Header, Footer } from './components'

const PageTransition = ({ children, location }) => (
  <ReactCSSTransitionGroup transitionName='swap'
                           transitionAppear={ true }
                           transitionLeave={ false }
                           transitionAppearTimeout={ 500 }
                           transitionEnterTimeout={ 500 } >
    { React.cloneElement(children, { key: location.pathname }) }
  </ReactCSSTransitionGroup>
)

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
          <PageTransition location={ this.props.location }>
            { this.props.children }
          </PageTransition>
        </main>
        <Footer />
      </div>
    )
  }
}
