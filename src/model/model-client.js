const axios = require('axios');

// 为给定 ID 的 user 创建请求

  
  export default {
    getHeader () {
        return axios.get('/header')
    },
    getMain () {
        return axios.get('/main')
    },
  }