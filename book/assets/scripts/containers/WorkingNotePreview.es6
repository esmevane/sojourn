import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'
import NotePreview from '../components/NotePreview'

function mapStateToProps(state) {
  let [ id ]   = state.notes.active
  let [ note ] = state.notes.contents.filter(note => note.meta.id === id)
  let content  = marked(note.body)

  return { content }
}

const WorkingNotePreview = connect(mapStateToProps)(NotePreview)
export default WorkingNotePreview
