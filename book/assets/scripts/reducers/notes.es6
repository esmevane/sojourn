import Immutable    from 'immutable'
import * as Actions from '../actions'
import * as Schema  from '../schema'
import * as Redux   from 'redux'

function add(state = Schema.InitializeState.notes.contents, action) {
  let startState = Immutable.fromJS(state)
  let newNote    = Schema.createNote(action.text)

  return startState.push(newNote).toJS()
}

function archive(state = Schema.InitialState.notes.contents, action) {
  let startState = Immutable.fromJS(state)
  let noteIds    = startState.map(({ meta: id }) => id)
  let noteIndex  = noteIds.indexOf(action.id)
  let note       = Immutable.fromJS(startState.get(noteIndex))
  let newNote    = note.setIn(['meta', 'archived'], true)

  return startState.setIn([noteIndex], newNote).toJS()
}

function update(state = Schema.InitialState.notes.contents, action) {
  let startState = Immutable.fromJS(state)
  let noteIds    = startState.map(({ meta: id }) => id)
  let noteIndex  = noteIds.indexOf(action.id)
  let note       = Immutable.fromJS(startState.get(noteIndex))
  let newNote    = note.set('body', action.body)

  return startState.setIn([noteIndex], newNote).toJS()
}

// Direct reducers:  These methods are meant to interact directly with keys on
// the state tree.
//
function active(state = Schema.InitialState.notes.active, action) {
  let { type, id } = action

  return type == Actions.ActivateNote ? [id] : state
}

function contents(state = Schema.InitialState.notes.contents, action) {
  switch (action.type) {
    case Actions.AddNote:
      return add(state, action)
    case Actions.ArchiveNote:
      return archive(state, action)
    case Actions.UpdateNote:
      return update(state, action)
    default:
      return state
  }
}

function filter(state = Schema.InitialState.notes.filter, action) {
  return action.type == Actions.FilterNotes ? action.filter : state
}

const notes = Redux.combineReducers({ filter, contents, active })

export default notes
