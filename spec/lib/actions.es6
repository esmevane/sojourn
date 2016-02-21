import * as Actions from '../../lib/scripts/actions'

describe("Actions", () => {
  it("exists", () => { expect(Actions).to.be.ok })

  it("defines UpdateChart", () => { expect(Actions.UpdateChart).to.be.ok })

  it("defines AddNote", () => { expect(Actions.AddNote).to.be.ok })
  it("defines GetNote", () => { expect(Actions.GetNote).to.be.ok })
  it("defines ArchiveNote", () => { expect(Actions.ArchiveNote).to.be.ok })
  it("defines FilterNotes", () => { expect(Actions.FilterNotes).to.be.ok })
  it("defines ActivateNote", () => { expect(Actions.ActivateNote).to.be.ok })
  it("defines NoteFilters", () => { expect(Actions.NoteFilters).to.be.ok })
  it("defines UpdateNote", () => { expect(Actions.UpdateNote).to.be.ok })
  it("defines Navigate", () => { expect(Actions.Navigate).to.be.ok })

  describe("updateChart", () => {
    let { updateChart, UpdateChart } = Actions

    it("creates an UpdateChart action", () => {
      var { type } = updateChart()

      expect(type).to.eql(UpdateChart)
    })
  })

  describe("navigate", () => {
    let { navigate, Navigate } = Actions
    let newRoute = "/a/path/to/navigate/to"

    it("creates a Navigate action", () => {
      var { type } = navigate(newRoute)

      expect(type).to.eql(Navigate)
    })

    it("passes the given route", () => {
      let { route } = navigate(newRoute)

      expect(route).to.eql(newRoute)
    })
  })

  describe("NoteFilters", () => {
    let { NoteFilters } = Actions

    it("defines NoteFilters.ShowAll", () => {
      expect(NoteFilters.ShowAll).to.be.ok
    })

    it("defines NoteFilters.ShowArchived", () => {
      expect(NoteFilters.ShowArchived).to.be.ok
    })

    it("defines NoteFilters.ShowUnarchived", () => {
      expect(NoteFilters.ShowUnarchived).to.be.ok
    })
  })

  describe("addNote", () => {
    let { addNote, AddNote } = Actions
    let noteText = "# I intend for this to work with markdown"

    it("creates an AddNote action", () => {
      var { type } = addNote(noteText)

      expect(type).to.eql(AddNote)
    })

    it("passes the given text", () => {
      var { text } = addNote(noteText)

      expect(text).to.eql(noteText)
    })
  })

  describe("archiveNote", () => {
    let { archiveNote, ArchiveNote } = Actions
    let noteId = "1234"

    it("creates an archiveNote action", () => {
      var { type } = archiveNote(noteId)

      expect(type).to.eql(ArchiveNote)
    })

    it("passes the given id", () => {
      var { id } = archiveNote(noteId)

      expect(id).to.eql(noteId)
    })
  })

  describe("activateNote", () => {
    let { activateNote, ActivateNote } = Actions
    let noteId = "1234"

    it("creates an activateNote action", () => {
      var { type } = activateNote(noteId)

      expect(type).to.eql(ActivateNote)
    })

    it("passes the given id", () => {
      var { id } = activateNote(noteId)

      expect(id).to.eql(noteId)
    })
  })

  describe("getNote", () => {
    let { getNote, GetNote } = Actions
    let noteId = "1234"

    it("creates a GetNote action", () => {
      var { type } = getNote(noteId)

      expect(type).to.eql(GetNote)
    })

    it("passes the given id", () => {
      var { id } = getNote(noteId)

      expect(id).to.eql(noteId)
    })
  })

  describe("setNoteFilters", () => {
    let { setNoteFilters, FilterNotes } = Actions
    let noteFilter = "a:filter:constant"

    it("creates an setNoteFilters action", () => {
      var { type } = setNoteFilters(noteFilter)

      expect(type).to.eql(FilterNotes)
    })

    it("passes the given filter", () => {
      var { filter } = setNoteFilters(noteFilter)

      expect(filter).to.eql(noteFilter)
    })
  })

  describe("updateNote", () => {
    let { updateNote, UpdateNote } = Actions
    let noteId = "1234"

    it("creates an updateNote action", () => {
      var { type } = updateNote(noteId, "New body")

      expect(type).to.eql(UpdateNote)
    })

    it("passes the given id", () => {
      var { id } = updateNote(noteId, "New body")

      expect(id).to.eql(noteId)
    })
  })

})
