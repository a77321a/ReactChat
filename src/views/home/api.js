/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-15 15:24:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 15:34:10
 */
import http from '../../common/js/http'

export const getAddData = () => {
  return http.get('/api/index/today/add')
}