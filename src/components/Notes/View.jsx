import React from 'react'
import styled from 'styled-components'
import { Note } from './components/Note'

const Wrapper = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 1fr);
row-gap: 15px;
column-gap: 15px;
@media (max-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 650px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 480px) {
  display: flex;
  flex-direction: column;
  width: 90%;
}
`

export default ({ notesIdList }) => {
  return <Wrapper>
    {notesIdList.map(id => <Note key={id} id={id} />)}
  </Wrapper>
}