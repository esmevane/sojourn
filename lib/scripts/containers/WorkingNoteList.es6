import React from 'react'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import NoteList from '../components/NoteList'

function mapStateToProps(state) {
  let activeNotes = state.notes.contents.filter(note => !note.meta.archived)
  return { notes: activeNotes }
}

function mapDispatchToProps(dispatch) {
  return {
    onNewNoteClick: (event) => {
      event.preventDefault()
      dispatch(Actions.addNote("# New note"))
    },
    onArchiveNoteClick: (id) => { dispatch(Actions.archiveNote(id)) },
    onNoteItemClick: (id) => { dispatch(Actions.activateNote(id)) }
  }
}

const WorkingNoteList = connect(mapStateToProps, mapDispatchToProps)(NoteList)
export default WorkingNoteList
