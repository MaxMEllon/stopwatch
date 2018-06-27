import React, { Fragment } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: #2f2f2f;
`

const Time = styled.span`
  font-family: 'num';
  font-size: 40vh;
  color: red;
  text-align: right;
  width: 25vw;
`
const Separetor = styled.span`
  font-family: 'num';
  font-size: 40vh;
  color: red;
  width: 8%;
`

export default function Stopwatch({ minitue, second, millsecond }) {
  return (
    <Box>
      <Time>
        {`${minitue}`.padStart(2, '0')}
      </Time>
      <Separetor>:</Separetor>
      <Time>
        {`${second}`.padStart(2, '0')}
      </Time>
      <Separetor>:</Separetor>
      <Time>
        {`${millsecond}`.padStart(2, '0')}
      </Time>
    </Box>
  )
}
