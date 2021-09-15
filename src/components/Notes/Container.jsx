import React from 'react'
import { useSelector } from 'react-redux'
import { getFilteredIdList } from './selector'
import View from './View'

export const Container = () => {
  const notesIdList = useSelector(getFilteredIdList)
  return <View notesIdList={notesIdList} />
}
