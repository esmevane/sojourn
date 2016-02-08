import React from 'react'

class NotePreview extends React.Component {
  componentDidMount() { this.refs.preview.innerHTML = this.props.content }
  componentDidUpdate() { this.refs.preview.innerHTML = this.props.content }
  render() { return(<div className='note-preview' ref='preview' />) }
}

export default NotePreview
