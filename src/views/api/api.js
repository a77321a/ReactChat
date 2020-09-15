import http from '../../common/js/http'

export const getMenu = () => {
  return http.post('/api/menu/info')
}