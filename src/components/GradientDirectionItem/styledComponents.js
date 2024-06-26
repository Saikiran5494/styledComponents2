// Style your elements here

import styled from 'styled-components'

export const Button = styled.button`
  font-size: 40px;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  margin: 15px;
  border: 0;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`

export const Li = styled.li`
  list-style-type: none;
`
