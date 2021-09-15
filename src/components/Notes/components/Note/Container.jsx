import React from 'react'
import View from './View'
import { changeContent, remove } from '../../../../state/notesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getNote } from '../../selector'

export const Container = ({ id }) => {
  const dispatch = useDispatch()
  const note = useSelector(getNote(id))
  const changeContentHandler = (value) => {
    dispatch(changeContent({ id, content: value }))
  }
  const handleRemove = () => dispatch(remove(id))
  return <View
    content={note.content}
    changeContentHandler={changeContentHandler}
    handleRemove={handleRemove}
  />
}

