/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-14 17:52:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 15:37:42
 */

import http from '../../common/js/http'
// import { SET_USER_INFO } from '../../store/actionCreators'
// export const login = ({ username, password }) => {
//   return (dispatch) => {
//     http.post('/api/adminUser/login', {
//       mobile: 'admin',
//       password: 'Khr0ao%2FXMwe7kN6dCiOiPA%3D%3D'
//     }).then((res) => {
//       dispatch(SET_USER_INFO(res))
//     })
//   }
// }
export const login = (param) => {
  return http.post('/api/adminUser/login', {
    mobile: 'admin',
    password: 'Khr0ao%2FXMwe7kN6dCiOiPA%3D%3D'
  })
}