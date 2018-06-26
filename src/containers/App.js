import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import ControllPanel from '../components/ControllPanel'
import Stopwatch from '../components/Stopwatch'
import { countDown, setDraftTime, startCountDown, stopCountDown } from '../actions'

class App extends React.Component {
  constructor() {
    super()
    this.handleChangeTime = this.handleChangeTime.bind(this)
    this.handleStartCountDown = this.handleStartCountDown.bind(this)
  }

  /**
   * @param {Event} DOMEvent
   * @param {string(minitue|second)}
   */
  handleChangeTime(e, type) {
    e.preventDefault()
    this.props.setDraftTime({ type, value: e.target.value })
  }

  handleStartCountDown() {
    const { draftSecond, draftMinitue, startCountDown } = this.props
    startCountDown({ minitue: draftMinitue, second: draftSecond })
  }

  render() {
    const {
      minitue,
      second,
      millsecond,
      draftMinitue,
      draftSecond,
      stopCountDown,
    } = this.props

    return (
      <Fragment>
        <Stopwatch
          minitue={minitue}
          second={second}
          millsecond={millsecond}
        />
        <ControllPanel
          draftMinitue={draftMinitue}
          draftSecond={draftSecond}
          onStart={this.handleStartCountDown}
          onStop={stopCountDown}
          onChange={this.handleChangeTime}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  minitue: state.time.minitue,
  second: state.time.second,
  millsecond: state.time.millsecond,
  draftMinitue: state.draftTime.minitue,
  draftSecond: state.draftTime.second,
})

const mapDispatchToActions = {
  countDown,
  setDraftTime,
  startCountDown,
  stopCountDown,
}

export default App |> connect(mapStateToProps, mapDispatchToActions)
