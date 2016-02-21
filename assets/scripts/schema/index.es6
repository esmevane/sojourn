import uuid from 'uuid'
import { NoteFilters } from '../actions'
import { range, sample } from 'underscore'

const chart = {
  defaults: { domain: { low: -5, high: 25 }, dots: 100, seed: 20 },
  delay: 2500
}

export function randomizedScatter() {
  let { domain: { low, high }, dots, seed } = chart.defaults

  let data   = []
  let domain = { x: [low, high], y: [low, high], z: [low, high] }
  let points = range(1, dots)
  let seeds  = range(1, seed)

  for (let point of points) {
    let [ id, x, y, z ] = sample(seeds, 4)

    data.push({ id, x, y, z })
  }

  return { domain, data }
}

chart.scatter = randomizedScatter()

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
  chart: chart,
  navigate: { route: "" },
  notes: {
    active:   [firstNote.meta.id],
    contents: [firstNote],
    filter:   NoteFilters.ShowUnarchived
  }
}
