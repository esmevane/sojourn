import * as Schema from '../../lib/scripts/schema'

describe("The base schema", () => {
  it("has an InitialState", () => { expect(Schema.InitialState).to.be.ok })

  describe("The initial state", () => {
    it("has a :notes key", () => {
      expect(Schema.InitialState).to.include.key('notes')
    })

    it("has a :chart key", () => {
      expect(Schema.InitialState).to.include.key('chart')
    })

    describe("the chart domain", () => {
      let { chart } = Schema.InitialState

      describe("scatter", () => {
        let { scatter } = chart

        describe("domain", () => {
          let { domain } = scatter

          it("has an x, y, and z", () => {
            expect(domain).to.include.keys('x', 'y', 'z')
          })
        })

        describe("data", () => {
          it("is an array", () => {
            expect(scatter.data).to.be.instanceof(Array)
          })

          it("contains items of an expected schema", () => {
            scatter.data.forEach(item => {
              expect(item).to.include.keys('id', 'x', 'y', 'z')
            })
          })
        })
      })

      describe("delay", () => {
        it("starts at 2500", () => { expect(chart.delay).to.eql(2500) })
      })
    })

    describe("the notes domain", () => {
      let { notes } = Schema.InitialState

      it("has an :active key", () => {
        expect(notes).to.include.key('active')
      })

      it("has a :contents key", () => {
        expect(notes).to.include.key('contents')
      })

      it("has a :filter key", () => {
        expect(notes).to.include.key('filter')
      })
    })
  })

  describe("createNote", () => {
    let noteBody = "# markdown"
    let newNote  = Schema.createNote(noteBody)

    it("creates a meta field", () => { expect(newNote).to.include.key('meta') })
    it("creates a body field", () => { expect(newNote).to.include.key('body') })

    it("assigns an internal ID to the note's meta tags", () => {
      expect(newNote.meta.id).to.be.ok
    })

    it("assigns an archived key to the note's meta tags", () => {
      expect(newNote.meta.archived).to.be.false
    })

    it("assigns the note body to the body attribute", () => {
      expect(newNote.body).to.eql(noteBody)
    })

    it("assigns a created date to the note's meta tags", () => {
      expect(newNote.meta.created).to.be.instanceof(Date)
    })

  })

})
