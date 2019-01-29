import { Message } from 'element-ui'
export default {
  transformResponse: [
    function (data) {
      // if (!data || data.result === 'FAULT') {
      //   Message({
      //     type: 'error',
      //     message: '未知错误'
      //   })
      //   console.info(data)
      // }
      return data
    }
  ]
}
