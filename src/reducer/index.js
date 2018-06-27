import * as actions from '../actions'

export const initialState = {
  time: {
    minitue: 0,
    second: 0,
    millsecond: 0,
  },
  draftTime: {
    minitue: 0,
    second: 0,
  },
}

/**
 * validation object as time
 * @param {Object} time - like a time object
 * @returns {boolean} invalid or valid
 */
const validateTimeObject = (maybeTime) => (
  'minitue' in maybeTime && 'second' in maybeTime && 'millsecond' in maybeTime
)

/**
 * subtraction from time object
 * @param {Object} time - like a time object
 * @returns {Object} like a time object
 */
const subtractionFromTime = (time) => {
  // validation arguments
  if (!validateTimeObject(time))
    throw new Error('invalid time object')

  const nextTime = Object.assign({}, time)
  if (nextTime.millsecond === 0) {
    if (nextTime.second === 0) {
      if (nextTime.minitue === 0) return time
      nextTime.minitue -= 1
      nextTime.second = 60
    }
    nextTime.second -= 1
    nextTime.millsecond = 99
  } else {
    nextTime.millsecond -= 1
  }
  return nextTime
}

/**
 * @type {<T, P>(state: T, payload: P) => T}
 */
export default function reducer(state, action) {
  if (typeof state === 'undefined') return initialState

  switch (action.type) {
    case actions.countDown.type:
      return Object.assign({}, state, { time: subtractionFromTime(state.time) })

    case actions.setDraftTime.type: {
      const { type, value } =  action.payload
      const num = parseInt(value, 10)
      if (isNaN(num)) return state
      const nextDraftTime = Object.assign(
        {},
        state.draftTime,
        type === 'minitue' ? { minitue: num } : { second: num }
      )
      return Object.assign({}, state, { draftTime: nextDraftTime })
    }

    case actions.setTime.type: {
      const { minitue, second, millsecond } = action.payload
      return Object.assign({}, state, { time: { minitue, second, millsecond } })
    }

    case actions.reset.type: {
      return Object.assign({}, state, { time: { minitue: 0, second: 0, millsecond: 0 } })
    }

    default:
      return state
  }
}
