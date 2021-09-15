import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton, InputBase } from '@material-ui/core'
import DeleteIcon from '../../../../assets/delete.png'

const Wrapper = styled.div`
font-family: 'Roboto';
min-height: 60px;
background-color: aliceblue;
border-radius: 20px;
padding: 8px 14px;
position: relative;

`
const ButtonWrapper = styled.div`
position: absolute;
top: 2px;
right: 2px;
opacity: ${({ isMounted }) => isMounted ? 1 : 0};
transition: opacity 0.1s ease-in-out;
`

export default ({
  content,
  changeContentHandler,
  handleRemove
}) => {
  const [isHover, setIsHover] = useState(false)
  return <Wrapper
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
  >
    <InputBase
      onChange={e => changeContentHandler(e.target.value)}
      value={content}
      multiline
      style={{ lineHeight: '28px' }}
      fullWidth
      minRows={2}
      variant="outlined"
    />
    <ButtonWrapper isMounted={isHover}>
      <IconButton onClick={handleRemove}>
        <img src={DeleteIcon} width={20} />
      </IconButton>
    </ButtonWrapper>

  </Wrapper>
}