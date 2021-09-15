import { configureStore } from '@reduxjs/toolkit'
import Notes from './state/notesSlice'

export default configureStore({
  reducer: {
    Notes
  }
})