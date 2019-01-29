import { MessageBox } from 'element-ui'

let fail = function (param) {
  MessageBox.alert(
    `<div>
      <div class="p-red">
          <div class="title">恭喜您</div>
          <div class="cont">获得`+param.money+`元爱便利返现金额</div>
      </div>
      <div class="mess">请在爱便利账户余额中查看吧。</div>
    </div>`,
    '',
    {
      dangerouslyUseHTMLString: true,
      showClose: false,
      center: true,
      confirmButtonText: '关闭',
      confirmButtonClass: 'yellow',
      customClass: 'pop-red-congratulation pop',
      closeOnClickModal: true
    }
  ).catch(() => {
  });
}

export default fail
