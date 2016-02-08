export const AddNote      = "notes:change:add"
export const ArchiveNote  = "notes:change:archive"
export const ActivateNote = "notes:change:activate"
export const FilterNotes  = "notes:change:filter"
export const UpdateNote   = "notes:change:update"
export const GetNote      = "notes:get:id"

const ShowAll        = "notes:filter:all"
const ShowArchived   = "notes:filter:archived"
const ShowUnarchived = "notes:filter:unarchived"

export const NoteFilters = { ShowAll, ShowArchived, ShowUnarchived }

export function addNote(text) {
  let type = AddNote
  return { type, text }
}

export function activateNote(id) {
  let type = ActivateNote
  return { type, id }
}

export function archiveNote(id) {
  let type = ArchiveNote
  return { type, id }
}

export function getNote(id) {
  let type = GetNote
  return { type, id }
}

export function setNoteFilters(filter) {
  let type = FilterNotes
  return { type, filter }
}

export function updateNote(id, body) {
  let type = UpdateNote
  return { type, id, body }
}
