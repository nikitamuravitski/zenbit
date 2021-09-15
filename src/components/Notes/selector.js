import { createSelector } from "reselect"
export const getFilter = state => state.Notes.filter
export const getFilteredIdList = createSelector(
  getFilter,
  state => state,
  (filter, state) => {
    if (filter === '') return state.Notes.notesIdList
    return state.Notes.notesIdList.filter(id => {
      let currentNote = state.Notes.notesData[id]
      return currentNote.content.toLowerCase().includes(filter.toLowerCase())
    })
  })

export const getNote = id => state => state.Notes.notesData[id]