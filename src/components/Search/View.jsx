import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../state/notesSlice'

const Wrapper = styled.div`
width: 40%;
margin: 20px 0;
@media (max-width: 768px) {
  width: 60%;
}
@media (max-width: 480px) {
  width: 90%;
}
`

export default () => {
  const dispatch = useDispatch()
  return <Wrapper>
    <TextField
      onChange={e => dispatch(changeFilter(e.target.value))}
      fullWidth
      label="Search"
      placeholder="Search"
      variant="outlined"
    />
  </Wrapper>
}