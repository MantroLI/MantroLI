import { MessageBox } from 'element-ui'

const tankuang = require('@/assets/img/checkmark.png')
let fail = function (param) {
  MessageBox.alert(
    '<div><div class="p-red"><img src=' +
      tankuang +
      '><div class="err">爱便利VIP卡1张+'+param.money+'元卡内余额</div></div><div class="mess">更多精彩活动尽在峰向标APP</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-red-balance pop',
      closeOnClickModal: true
    }
  ).catch(() => {
  });
}

export default fail
