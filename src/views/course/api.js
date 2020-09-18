/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-17 18:10:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-17 18:23:52
 */
import http from '../../common/js/http'

// 课程列表
export const getCourseList = (param) => {
  return http.post('/api/course/basis/index', param)
}