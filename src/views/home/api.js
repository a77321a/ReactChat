/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-15 15:24:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-16 14:10:50
 */
import http from '../../common/js/http'

// 今日新增
export const getAddData = () => {
  return http.get('/api/index/today/add')
}
// 累计数据
export const getAccumulateData = () => {
  return http.get('/api/index/accumulate/datum')
}