import { MessageBox } from 'element-ui'

let pop = function (param) {
  MessageBox.alert(
    '<div><div><div class="err">抱歉，您还没有达到兑换资格</div></div><div class="mess">出借后获取兑换资格</div></div>',
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '立即出借',
      confirmButtonClass: 'yellow',
      customClass: 'pop-lend pop',
      closeOnClickModal: true
    }
  ).then(param.callback && param.callback).catch(() => {
  });
}

export default pop
