import React from 'react'
import { connect } from 'react-redux'
import NoteEditor from '../components/NoteEditor'
import { updateNote } from '../actions'

function mapStateToProps(state) {
  let [ id ]   = state.notes.active
  let [ note ] = state.notes.contents.filter(note => note.meta.id === id)

  return { body: note.body, noteId: id }
}

function mapDispatchToProps(dispatch) {
  return {
    onNoteChange: (id, body) => dispatch(updateNote(id, body))
  }
}

let connector = connect(mapStateToProps, mapDispatchToProps)
const WorkingNoteEditor = connector(NoteEditor)
export default WorkingNoteEditor
