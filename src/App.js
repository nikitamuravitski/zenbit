import React from 'react'
import { Search } from './components/Search'
import { Notes } from './components/Notes'
import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import { create } from './state/notesSlice'

const Wrapper = styled.div`
display: flex;
position: relative;
width: 100vw;
height: 100vh;
justify-content: center;
`

const Container = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
width: 70%;
@media (max-width: 1100px) {
  width: 80%
}
@media (max-width: 900px) {
  width: 90%
}
@media (max-width: 768px) {
  width: 97%
}
`
const FabWrapper = styled.div`
position: fixed;
bottom: 40px;
right: 15%;
@media (max-width: 1100px) {
  right: 10%
}
@media (max-width: 900px) {
  right: 5%
}
@media (max-width: 768px) {
  right: 40px
}
`

export default () => {
  const dispatch = useDispatch()
  const clickHandler = () => dispatch(create(uuid()))
  return <Wrapper>
    <Container>
      <Search />
      <Notes />
      <FabWrapper>
        <Fab onClick={clickHandler} children="Add Idea" variant="extended" />
      </FabWrapper>
    </Container>
  </Wrapper>
}
