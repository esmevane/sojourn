import React from 'react'
import marked from 'marked'

function title(body) {
  if (document) {
    let div = document.createElement('div')

    div.innerHTML = marked(body)
    return `${div.innerText.slice(0, 20)}...`
  } else {
    return `${body.slice(0, 20)}...`
  }
}

class NoteItem extends React.Component {
  static propTypes = {
    onArchive: React.PropTypes.func.isRequired,
    onActive: React.PropTypes.func.isRequired,
    body: React.PropTypes.string.isRequired
  };

  render() {
    return(
      <div className='note-list-item'>
        <div className='note-list-item-title' onClick={ this.props.onActive } >
          <p>{ title(this.props.body) }</p>
        </div>
        <a className='note-list-item-archive'
             onClick={ this.props.onArchive }>
          Archive note
        </a>
      </div>
    )
  }
}

export default NoteItem
