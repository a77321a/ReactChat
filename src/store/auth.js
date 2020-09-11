/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 17:32:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 18:08:36
 */
const defaultState = {
  isLogin: false,
  user: 'llll'
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: true }
    case 'LOGOUT':
      return { ...state, isLogin: false }
    default:
      return { ...state }
  }
}