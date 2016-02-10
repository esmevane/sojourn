import React from 'react'

import {
  WorkingNoteEditor,
  WorkingNoteList,
  WorkingNotePreview
} from '../containers'

const Demo = () => (
  <section className='notes'>
    <WorkingNoteList />
    <WorkingNoteEditor />
    <WorkingNotePreview />
  </section>
)

export default Demo
