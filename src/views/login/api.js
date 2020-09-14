/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-14 17:52:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-14 19:17:17
 */

import http from '../../common/js/http'
import encryption from './encryption'
import { SET_USER_INFO } from '../../store/actionCreators'
export const login = ({ username, password }) => {
  return (dispatch) => {
    http.post('/api/adminUser/login', {
      mobile: username,
      password: encryption(password),
    }).then((res) => {
      console.log(res)
      dispatch(SET_USER_INFO(res))
    })
  }
}