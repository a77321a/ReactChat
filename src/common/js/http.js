
import { Toast } from 'antd-mobile'

const Http = function () { };
Http.prototype.fetch = function (url, method, params = {}, fetchConfig = {}) {
  Toast.loading()

  url = 'http://lastsensen.zhouhaiyang.com/' + url;
  fetchConfig.showLoading = fetchConfig.showLoading === undefined ? true : fetchConfig.showLoading;
  if (this.beforeRequest) {
    this.beforeRequest(fetchConfig);
  }
  let config = {
    method: method,
    mode: 'cors'
  };
  if (params instanceof FormData) {
    config.body = params;
  } else {
    if (method == 'get' || method == 'head') {
      if (url.indexOf('?') > 0) {
        url += '&';
      } else {
        url += '?';
      }
      for (let key in params) {
        let value = params[key]
        if (typeof (value) == 'function' || value === undefined) {
          continue;
        }
        // if (typeof (value) == 'function' || value === undefined) {
        //     continue;
        // }
        // value = encodeURIComponent(params[key]);;

        url += key + '=' + value + '&';
      }
    } else {
      let obj = {};
      for (let key in params) {
        let value = params[key];
        if (typeof (value) == 'function' || value === undefined) {
          continue;
        }
        obj[key] = value;
      }
      config.body = JSON.stringify(obj);
    }
  }
  config.headers = {
    'Content-Type': params instanceof FormData ? 'multipart/form-data' : 'application/json',
  };
  if (sessionStorage.adminToken) {

    config.headers.Authorization = 'Bearer ' + sessionStorage.adminToken;
  }
  return new Promise((resolve) => {
    // debugger
    fetch(url, config).then(async res => {
      Toast.hide()
      if (this.afterRequest) {
        this.afterRequest(fetchConfig);
      }
      if (res.status == 200) {
        let data = await res.json();
        if (data.code == 200) {
          resolve(data.data || data);
        }
        else if (data.code == 501) {
          console.log(data)
          resolve(data.data || data);
        }
        else if (data.code == 203) {
          resolve(data);
        } else if (data.code == 205) {
          if (this.onApiNotCreated) {
            this.onApiNotCreated(data);
          }
        } else {
          if (this.onApiError) {
            this.onApiError(data);
          }
          if (fetchConfig.onError) {
            fetchConfig.onError(data.msg);
          } else {
            //reject(data.msg);
          }
        }
      }
      else {
        Toast.fail(res.status.toString())
        // if (this.onApiError) {
        //   this.onApiError({
        //     code: res.status,
        //     msg: res.status.toString()
        //   });
        // }
      }
      if (fetchConfig.onComplete) {
        fetchConfig.onComplete();
      }
    });
  });
};

Http.prototype.get = function (url, params, config) {
  return this.fetch(url, 'get', params, config);
};

Http.prototype.post = function (url, params, config) {
  return this.fetch(url, 'post', params, config);
};

Http.prototype.put = function (url, params, config) {
  return this.fetch(url, 'put', params, config);
};

Http.prototype.delete = function (url, params, config) {
  return this.fetch(url, 'delete', params, config);
};

export default new Http();