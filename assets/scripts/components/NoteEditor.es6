import React from 'react'
import { findDOMNode } from 'react-dom'

class NoteEditor extends React.Component {
  handleInput = (event) => {
    return this.props.onNoteChange(this.props.noteId, event.target.innerText)
  };

  componentDidMount() { this.refs.editor.innerHTML = this.props.body }
  componentDidUpdate() { this.refs.editor.innerHTML = this.props.body }

  render() {
    return(
      <div className='note-editor'>
        <pre ref="editor"
             contentEditable={ true }
             onInput={ this.handleInput } />
      </div>
    )
  }
}

export default NoteEditor
