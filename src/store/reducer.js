/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-08 17:32:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-09 10:50:24
 */
const defaultState = {
  value: 0
}
// reducer可以接受state，但绝不能修改state
export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'add':
      state.value += 1
      return JSON.parse(JSON.stringify(state))
    case 'desc':
      state.value -= 1
      return JSON.parse(JSON.stringify(state))
  }
  return JSON.parse(JSON.stringify(state))
}