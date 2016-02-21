import Immutable from 'immutable'
import { NoteApp } from '../../lib/scripts/reducers'
import * as Actions from '../../lib/scripts/actions'

describe("Reducers", () => {
  describe("NoteApp", () => {
    it("exists", () => { expect(NoteApp).to.be.ok })

    it("gives a default state", () => {
      expect(NoteApp(undefined, "action:string")).to.be.an.object
    })

    describe("updating the chart", () => {
      let state = NoteApp(undefined, "null:action")
      let action = Actions.updateChart()
      let nextState = NoteApp(state, action)

      it("changes the scatter", () => {
        expect(state.chart.scatter).not.to.eql(nextState.chart.scatter)
      })
    })

    describe("navigation", () => {
      let nextPath = "/the/next/path"
      let action = Actions.navigate(nextPath)
      let state = NoteApp(undefined, action)

      it("changes the path", () => {
        expect(state.navigate.route).to.eql(nextPath)
      })
    })

    describe("filtering notes", () => {
      let action   = Actions.setNoteFilters(Actions.NoteFilters.ShowUnarchived)
      let newState = NoteApp(undefined, action)

      it("returns a filtered state", () => {
        expect(newState.notes.filter).to.eql(Actions.NoteFilters.ShowUnarchived)
      })
    })

    describe("adding notes", () => {
      let noteText = "# Markdown markdown markdown"
      let action   = Actions.addNote(noteText)
      let newState = NoteApp(undefined, action)
      let newNote  = Immutable.fromJS(newState.notes.contents).get(-1).toJS()

      it("has a new note", () => {
        expect(newState.notes.contents.length).to.eql(2)
      })

      describe("persisted note schema", () => {

        it("assigns an internal ID to the note's meta tags", () => {
          expect(newNote.meta.id).to.be.ok
        })

        it("assigns the note body to the body attribute", () => {
          expect(newNote.body).to.eql(noteText)
        })

        it("assigns a created date to the note's meta tags", () => {
          expect(newNote.meta.created).to.be.instanceof(Date)
        })
      })

    })

    describe("archiving notes", () => {
      let noteText  = "# Markdown markdown markdown"
      let addNote   = Actions.addNote(noteText)
      let state     = NoteApp(undefined, addNote)
      let firstNote = Immutable.fromJS(state.notes.contents).get(-1).toJS()
      let action    = Actions.archiveNote(firstNote.meta.id)
      let newState  = NoteApp(state, action)
      let newNote   = Immutable.fromJS(newState.notes.contents).get(-1).toJS()

      it("has the same number of notes", () => {
        var secondStateLength = newState.notes.contents.length
        var firstStateLength  = state.notes.contents.length

        expect(secondStateLength).to.eql(firstStateLength)
      })

      describe("persisted note schema", () => {
        it("keeps the same id", () => {
          expect(newNote.meta.id).to.eql(firstNote.meta.id)
        })

        it("keeps the same note body", () => {
          expect(newNote.body).to.eql(firstNote.body)
        })

        it("sets the archived attribute in meta", () => {
          expect(newNote.meta.archived).to.be.true
        })
      })

    })

    describe("updating notes", () => {
      let noteText  = "# Markdown markdown markdown"
      let addNote   = Actions.addNote(noteText)
      let state     = NoteApp(undefined, addNote)
      let firstNote = Immutable.fromJS(state.notes.contents).get(-1).toJS()
      let newBody   = "# New body"
      let action    = Actions.updateNote(firstNote.meta.id, newBody)
      let newState  = NoteApp(state, action)
      let newNote   = Immutable.fromJS(newState.notes.contents).get(-1).toJS()

      it("has the same number of notes", () => {
        var newStateLength = newState.notes.contents.length
        var stateLength    = state.notes.contents.length

        expect(newStateLength).to.eql(stateLength)
      })

      describe("persisted note schema", () => {
        it("keeps the same id", () => {
          expect(newNote.meta.id).to.eql(firstNote.meta.id)
        })

        it("sets the body to the new body", () => {
          expect(newNote.body).to.eql(newBody)
        })
      })

    })

    describe("activating notes", () => {
      let noteText    = "# Markdown markdown markdown"
      let addNote     = Actions.addNote(noteText)
      let state       = NoteApp(undefined, addNote)
      let firstNote   = Immutable.fromJS(state.notes.contents).get(-1).toJS()
      let action      = Actions.activateNote(firstNote.meta.id)
      let secondState = NoteApp(state, action)

      it("stores the note id in the active field", () => {
        expect(secondState.notes.active).to.include(firstNote.meta.id)
      })
    })

  })
})
