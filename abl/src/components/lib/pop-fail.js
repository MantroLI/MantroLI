import { MessageBox } from 'element-ui'

const tankuang = require('../../assets/img/tankuang.png')
let fail = function () {
  MessageBox.alert(
    '<div><div><img src=' +
      tankuang +
      '></div><font class="err">抱歉，兑换失败，请稍后重试</font></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-fail pop',
      closeOnClickModal: true
    }
  ).catch(() => {
  });
}

export default fail
