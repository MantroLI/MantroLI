// import Vue from 'vue'
import { Message } from 'element-ui'
export default {
  transformResponse: [
    function (data) {
      // console.log(this, data, arguments)
      debugger
      if (data && data.status === 407) {
        Message({
          type: 'error',
          message: '没有权限'
        })
      } else {
        return data
      }
      // return data;
    }
  ],
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'timeout': 5000,
    'Content-Type': 'application/json'
  }
  // transformRequest: [function (data) {
  //   let ret = ''
  //   for (let it in data) {
  //     let ddd = ''
  //     if (typeof (data[it]) === 'object') {
  //       ddd = encodeURIComponent(JSON.stringify(data[it]))
  //     } else {
  //       ddd = encodeURIComponent(data[it])
  //     }
  //     ret += encodeURIComponent(it) + '=' + ddd + '&'
  //   }
  //   return ret
  // }]
}
