// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(${props => props.changeBackground});
  padding: 60px;
`

export const Heading = styled.h1`
  font-size: 50px;
  color: white;
`

export const Para = styled.p`
  color: white;
  font-size: 40px;
`

export const UnorderedList = styled.ul`
  padding: 0;
  display: flex;
`
export const Para2 = styled.p`
  color: white;
  font-size: 35px;
`
export const OuterDiv = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  width: 50%;
  margin-top: 0;
`
export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`
export const Input = styled.input`
  width: 200px;
  height: 70px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: lightgreen;
  border: 0px;
  padding: 10px;
  font-size: 40px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
`
