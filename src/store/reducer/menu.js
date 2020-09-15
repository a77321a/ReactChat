/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-15 13:47:53
 * @LastEditors: 
 * @LastEditTime: 2020-09-15 13:48:58
 */

const defaultState = {
  menu: sessionStorage.menu ? JSON.parse(sessionStorage.menu) : []
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      sessionStorage.setItem('menu', JSON.stringify(action.value))
      return { ...action.value, }
    case 'GET_MENU':
      return { ...state, }
    default:
      return { ...state }
  }
}