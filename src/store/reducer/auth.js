/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 17:32:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 15:07:14
 */
const userInfo = sessionStorage.userInfo ? JSON.parse(sessionStorage.userInfo) : {}
const defaultState = {
  isLogin: false,
  ...userInfo
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      sessionStorage.setItem('adminToken', action.value.remember_token)
      sessionStorage.setItem('userInfo', JSON.stringify({ ...action.value, isLogin: true }))
      return { ...action.value, isLogin: true }
    case 'LOGOUT':
      return { ...state, isLogin: false }
    default:
      return { ...state }
  }
}