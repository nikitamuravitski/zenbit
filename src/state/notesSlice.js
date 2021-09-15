import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  filter: '',
  notesIdList: [],
  notesData: {}
}

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    create: (state, action) => {
      const id = action.payload
      const newNote = {
        id,
        content: ''
      }
      state.notesData[id] = newNote
      state.notesIdList.push(id)
    },
    remove: (state, action) => {
      const id = action.payload
      let filteredIdList = state.notesIdList.filter(noteId => {
        return noteId !== id
      })
      state.notesIdList = filteredIdList
      delete state.notesData[id]
    },
    changeContent: (state, action) => {
      const { id, content } = action.payload
      state.notesData[id].content = content
    },
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { create, remove, changeContent, changeFilter } = notesSlice.actions
export default notesSlice.reducer