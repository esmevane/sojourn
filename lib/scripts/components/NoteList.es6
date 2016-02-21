import React from 'react'
import { NoteItem } from '../components'

class NoteList extends React.Component {
  static propTypes = {
    onNewNoteClick: React.PropTypes.func.isRequired,
    onNoteItemClick: React.PropTypes.func.isRequired,
    notes: React.PropTypes.arrayOf(React.PropTypes.shape({
      body: React.PropTypes.string.isRequired
    })).isRequired
  };

  noteItems() {
    return this.props.notes.map((note) => (
      <NoteItem key={ note.meta.id }
                body={ note.body }
                onArchive={
                  (event) => {
                    event.preventDefault()
                    this.props.onArchiveNoteClick(note.meta.id)
                  }
                }
                onActive={() => this.props.onNoteItemClick(note.meta.id)} />
    ))
  }

  render() {
    return(
      <div className='note-list'>
        <div className='note-list-controls'>
          <a href="#" onClick={ this.props.onNewNoteClick }>New note</a>
        </div>
        <div className='note-list-items'>
          { this.noteItems() }
        </div>
      </div>
    )
  }
}

export default NoteList
