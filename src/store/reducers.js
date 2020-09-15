/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-11 18:04:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 14:02:19
 */
// 合并reducers

import { combineReducers } from 'redux'

import auth from './reducer/auth'
import menu from './reducer/menu'

export default combineReducers({ auth, menu })