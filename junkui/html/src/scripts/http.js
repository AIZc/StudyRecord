import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  responseType: 'json',
  timeout: 10000
})

// get url 参数
export const get = (url, params) => {
  let obj = {
    validateStatus: status => status < 500
  }
  return instance.get(url, Object.assign(obj, params))
}

// post url 返回参数
export const post = (url, data) => {
  return instance.post(url, data)
}

// post 表单
export const postForm = (url, data) => {
  let params = qs.stringify(data, { arrayFormat: 'repeat' })
  return instance.post(url, params)
}