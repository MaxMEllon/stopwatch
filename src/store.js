import createShigaMiddleware from 'redux-shiga'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootShiga from './shiga'

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose

const shigaMiddleware = createShigaMiddleware()

export default (reducer, initialState) => {
  // regist middlewares
  const middlewares = []
  middlewares.push(shigaMiddleware)

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  shigaMiddleware.run(rootShiga)
  return store
}
