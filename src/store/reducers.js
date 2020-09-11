/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-11 18:04:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 18:09:21
 */
// 合并reducers

import { combineReducers } from 'redux'

import counter from './counter'
import auth from './auth'

export default combineReducers({ counter, auth })