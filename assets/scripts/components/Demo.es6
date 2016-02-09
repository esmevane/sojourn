import React from 'react'
import { Splash, Menu } from '../components'

import {
  WorkingNoteEditor,
  WorkingNoteList,
  WorkingNotePreview
} from '../containers'

const Demo = () => (
  <Splash>
    <Menu />
    <section className='notes'>
      <WorkingNoteList />
      <WorkingNoteEditor />
      <WorkingNotePreview />
    </section>
  </Splash>
)

export default Demo
