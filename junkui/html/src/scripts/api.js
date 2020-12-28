import * as http from './http'

const handleResponse = res => {
  const { data } = res
  // if (!data || data.code < 0 || data.status < 0) {
  //   console.error(res.config.url, res.config.method, data)
  //   throw data || res
  // }
  return data
}

class Api {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  _getUrl (url) {
    return `${url}`
  }

  async get (url, params) {
    let res = await http.get(this._getUrl(url), params)
    return handleResponse(res)
  }

  async post(url, data) {
    let res = await http.post(this._getUrl(url), data)
    return handleResponse(res)
  }

  async postForm(url, data) {
    let res = await http.postForm(this._getUrl(url), data)
    return handleResponse(res)
  }
}

export const api = new Api('/')