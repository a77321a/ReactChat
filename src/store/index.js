/*
 * @Descripttion: 仓库
 * @Author: a77321a
 * @Date: 2020-09-08 17:26:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 18:06:40
 */
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import reducer from './reducers'
const composeEnhancer =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk))

const store = createStore(reducer,
  enhancer)

export default store