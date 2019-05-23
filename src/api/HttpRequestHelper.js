import axios from 'axios'
//import Qs from 'qs'
import { baseUrl, baseTimeout } from '../config'
import router from '../router'

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = baseTimeout
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.responseType = 'json'
axios.defaults.transformRequest = [
  function(data) {
    return JSON.stringify(data) //数据序列化  //return Qs.stringify(data)
  }
]
//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8' // application/x-www-form-urlencoded
    //config.headers['Authorization'] = getCookie('Authorization-Token')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    //当服务器返回401错误未授权的时侯重新登陆
    switch (error.response.status) {
      case 401:
        router.push({
          path: '/login',
          querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
        })
        break
      default:
        return Promise.reject(error)
    }
  }
)

export default {
  //get请求
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  //post请求
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  //put请求
  put(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  //patch请求
  patch(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
