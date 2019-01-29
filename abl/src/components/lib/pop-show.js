import { MessageBox } from 'element-ui'

const pic = require('@/assets/img/red-packet.png')
let pop = function (param) {
  MessageBox.alert(
    '<div><div><img src=' +
      pic +
      '></div><div class="err">恭喜您获得（<i>'+param.money+'元</i>）红包</div><div class="mess">快去爱便利账户领取吧</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-show pop',
      closeOnClickModal: true
    }
  ).then(param.callback && param.callback).catch(() => {
  });
}

export default pop
