import React from 'react'
import { findDOMNode } from 'react-dom'

class NoteEditor extends React.Component {
  handleInput = (event) => {
    return this.props.onNoteChange(this.props.noteId, event.target.value)
  };

  componentDidMount() { this.refs.editor.value = this.props.body }
  componentDidUpdate() { this.refs.editor.value = this.props.body }

  render() {
    return(
      <div className='note-editor'>
        <textarea ref="editor" onInput={ this.handleInput } />
      </div>
    )
  }
}

export default NoteEditor
