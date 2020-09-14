/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 17:32:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-14 19:18:54
 */
const defaultState = {
  isLogin: false,
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...action.value, isLogin: true }
    case 'LOGOUT':
      return { ...state, isLogin: false }
    default:
      return { ...state }
  }
}