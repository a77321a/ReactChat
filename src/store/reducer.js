/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 17:32:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-08 17:52:36
 */
const defaultState = {
  value: 0
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return state.value + 1
    case 'desc':
      return state.value - 1
  }
  return JSON.parse(JSON.stringify(state))
}