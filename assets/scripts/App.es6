require('application.sass')

import React from 'react'
import { Splash, Styleguide } from './components'
import * as Containers from './containers'

// In order to furnish the hot loader with the logic it needs to swap out
// components when their presentation or logic changes, you need to use this
// class syntax to extend React.Component.  Simple functions that return JSX
// don't trigger hot-swapping.
//
export default class App extends React.Component {
  render() {
    return(
      <Splash>
        <section className='notes'>
          <Containers.WorkingNoteList />
          <Containers.WorkingNoteEditor />
          <Containers.WorkingNotePreview />
        </section>
        <Styleguide />
      </Splash>
    )
  }
}
