import { dispatch, getState } from 'redux-shiga'

import * as actions from '../actions'

let interval

export default function rootShiga(onAsync) {
  onAsync(actions.startCountDown.type, async (action) => {
    const { minitue, second } = action.payload
    await actions.setTime({ minitue, second, millsecond: 0 }) |> dispatch
    if (interval != null) clearInterval(interval)
    interval = setInterval(() => dispatch(actions.countDown()), 10)
  })

  onAsync(actions.stopCountDown.type, async () => {
    if (interval != null) {
      clearInterval(interval)
      await dispatch(actions.reset())
    }
  })
}
