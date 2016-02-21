import uuid from 'uuid'
import { boundary } from '../composers/calculations'
import { build } from '../composers'
import { canvas } from '../composers/canvas'
import { NoteFilters } from '../actions'
import { range, sample } from 'underscore'

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
3. Super easy to get the hang of`

export function createNote(body) {
  return {
    meta: { created: new Date, id: uuid.v4(), archived: false, active: true },
    body: body
  }
}

export function composeTarget(element) {
  let height     = element.parentNode.offsetHeight
  let width      = element.parentNode.offsetWidth
  let container  = build(canvas({ element, height, width }))
  let boundaires = ({ domain }) => {
    let x = build(boundary({ range: [0, width], domain: domain.x }))
    let y = build(boundary({ range: [0, height], domain: domain.y }))
    let z = build(boundary({ range: [5, 20], domain: [1, 10] }))

    return { x, y, z }
  }

  return { height, width, container, boundaries }
}

export function randomizedScatter() {
  let data   = []
  let low    = -5
  let high   = 25
  let domain = { x: [low, high], y: [low, high], z: [low, high] }
  let points = range(1, 100)
  let seeds  = range(1, 20)

  for (let point of points) {
    let [ id, x, y, z ] = sample(seeds, 4)

    data.push({ id, x, y, z })
  }

  return { domain, data }
}

let firstNote = createNote(startText)
let scatter   = randomizedScatter()

export const InitialState = {
  chart: { delay: 2500, scatter, targets: [], fill: 'rgba(0, 255, 0, 0.1)' },
  navigate: { route: "" },
  notes: {
    active:   [firstNote.meta.id],
    contents: [firstNote],
    filter:   NoteFilters.ShowUnarchived
  }
}
