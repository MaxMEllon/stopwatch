import React, { Fragment } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  width: 5vw;
  height: 5vw;
`
const Input = styled.input`
  position: fixed;
  font-size: 5vw;
  line-height: 4vw;
  width: 10vw;
  text-align: right;
  height: 4vw;
`

export default function ControllPanel({
  onChange,
  draftMinitue,
  draftSecond,
  onStart,
  onStop,
}) {
  return (
    <Fragment>
      <Button
        style={{ right: 0, bottom: 0 }}
        onClick={onStart}
      >start</Button>
      <Button
        style={{ right: '5vw', bottom: 0 }}
        onClick={onStop}
      >stop</Button>
      <Input
        value={draftSecond}
        style={{ bottom: 0, right: '10vw' }}
        onChange={(e) => onChange(e, 'second')}
      />
      <Input
        value={draftMinitue}
        style={{ bottom: 0, right: '20vw' }}
        onChange={(e) => onChange(e, 'minitue')}
      />
    </Fragment>
  )
}
