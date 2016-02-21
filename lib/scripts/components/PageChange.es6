import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PageChange = ({ children, location }) => (
  <ReactCSSTransitionGroup transitionName='page-change'
                           transitionAppear={ true }
                           transitionLeave={ false }
                           transitionAppearTimeout={ 500 }
                           transitionEnterTimeout={ 500 } >
    { React.cloneElement(children, { key: location.pathname }) }
  </ReactCSSTransitionGroup>
)

export default PageChange
