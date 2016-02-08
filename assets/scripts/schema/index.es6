import uuid            from 'uuid'
import { NoteFilters } from '../actions'

const startText = `# Sojourn

## An example note app

Type whatever you feel like typing in the editor.  It'll update the notes menu on the left as well as show you a preview on the right.

### You can make lists:

* Here's one
* Another
* And another

### Of many kinds

1. It's really just markdown
2. Everyone loves markdown
3. Not that hard to write`

export function createNote(body) {
  return {
    meta: { created: new Date, id: uuid.v4(), archived: false, active: true },
    body: body
  }
}

let firstNote = createNote(startText)

export const InitialState = {
  notes: {
    active:   [firstNote.meta.id],
    contents: [firstNote],
    filter:   NoteFilters.ShowUnarchived
  }
}
