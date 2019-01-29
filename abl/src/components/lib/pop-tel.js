import { MessageBox } from 'element-ui'

const tel = require('@/assets/img/tel.png')
let pop = function () {
  MessageBox.alert(
    '<div><div><img src=' +
      tel +
      '></div><div class="err">抱歉，您还没有活动参与资格</div><div class="mess">请联系客服400-6166-000开通活动参与资格</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '立即拨打',
      confirmButtonClass: 'yellow',
      customClass: 'pop-tel pop',
      closeOnClickModal: true
    }
  ).then(function () {
    let aTag = document.createElement('a')
    aTag.setAttribute('href', 'tel:4006166000')
    aTag.click()
  }).catch(() => {
  });
}

export default pop
