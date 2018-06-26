
/**
 * build a `action creator`,
 * @params {string} - action type identify
 * @return {Function<P>(payload: P) => FSA} FSA as { type: string, payload: P }
 */
const actionBuilder = (type) => {
  const actionCreator = (payload) => ({ type, payload })
  actionCreator.type = type
  return actionCreator
}

/**
 * count down action creator
 * @return {<void>(payload: P) => FSA<P>}
 */
export const countDown = actionBuilder('cound down')

/**
 * set time action creator
 * @return {<{ minitue, second }>(payload: P) => FSA<P>}
 */
export const setTime = actionBuilder('set time')

/**
 * set time action creator
 * @return {<{ minitue, second }>(payload: P) => FSA<P>}
 */
export const setDraftTime = actionBuilder('set draft time')

/**
 * start count down action creator
 * @return {<void>(payload: P) => FSA<P>}
 */
export const startCountDown = actionBuilder('start count down')

/**
 * stop count down action creator
 * @return {<void>(payload: P) => FSA<P>}
 */
export const stopCountDown = actionBuilder('stop count down')

/**
 * @return {<void>(payload: P) => FSA<P>}
 */
export const reset = actionBuilder('reset')
